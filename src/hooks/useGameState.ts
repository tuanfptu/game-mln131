'use client';

import { useState, useCallback, useEffect } from 'react';
import { GameState, Player, Station, BoardCell } from '@/types';
import { generateBoard, getScoreForDifficulty, getPenaltyForDifficulty, hasValidPath } from '@/utils/helpers';
import { createPlayer, getStation, updatePlayerScore, completeGame } from '@/firebase/services';
import { TOTAL_STATIONS } from '@/data/mockStations';

interface UseGameStateReturn {
  gameState: GameState;
  initializeGame: (name: string, mssv: string, classCode: string) => Promise<void>;
  handleAnswer: (answerIndex: number) => void;
  moveMiner: (direction: 'up' | 'down' | 'left' | 'right') => void;
  proceedToNextStation: () => Promise<void>;
  resetGame: () => void;
}

const initialGameState: GameState = {
  player: null,
  currentStation: null,
  isLoading: false,
  isAnswered: false,
  selectedAnswer: null,
  isCorrect: null,
  showStationComplete: false,
  showGameComplete: false,
  revealedCells: [],
  boardItems: [],
  minerPosition: { row: 0, col: 0 },
  previousPosition: null,
  gameDuration: 0,
  isLost: false,
};

export function useGameState(): UseGameStateReturn {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  // Global game duration timer
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (gameState.player && !gameState.showGameComplete && !gameState.isLost) {
      timerId = setInterval(() => {
        setGameState((prev) => ({
          ...prev,
          gameDuration: prev.gameDuration + 1,
        }));
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [gameState.player, gameState.showGameComplete, gameState.isLost]);

  const initializeGame = useCallback(async (name: string, mssv: string, classCode: string) => {
    setGameState((prev) => ({ ...prev, isLoading: true }));
    try {
      const player = await createPlayer(name, mssv, classCode);
      const board = generateBoard();

      setGameState({
        player,
        currentStation: null,
        isLoading: false,
        isAnswered: false,
        selectedAnswer: null,
        isCorrect: null,
        showStationComplete: false,
        showGameComplete: false,
        revealedCells: [0], // Initial position revealed
        boardItems: board,
        minerPosition: { row: 0, col: 0 },
        previousPosition: null,
        gameDuration: 0,
        isLost: false,
      });
    } catch (error) {
      console.error('Failed to initialize game:', error);
      setGameState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const moveMiner = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    setGameState((prev) => {
      if (!prev.player || prev.showGameComplete || prev.isLost || prev.currentStation) {
        return prev;
      }

      const { row, col } = prev.minerPosition;
      let targetRow = row;
      let targetCol = col;

      if (direction === 'up') targetRow = row - 1;
      else if (direction === 'down') targetRow = row + 1;
      else if (direction === 'left') targetCol = col - 1;
      else if (direction === 'right') targetCol = col + 1;

      // Out of bounds check
      if (targetRow < 0 || targetRow >= 8 || targetCol < 0 || targetCol >= 8) {
        return prev;
      }

      // Find target cell
      const targetCellIndex = prev.boardItems.findIndex(
        (cell) => cell.row === targetRow && cell.col === targetCol
      );
      const targetCell = prev.boardItems[targetCellIndex];

      // Blocked by bush
      if (targetCell.type === 'bush') {
        return prev;
      }

      // 1. Move to Gem (Victory!)
      if (targetCell.type === 'gem') {
        const updatedBoard = prev.boardItems.map((cell) => {
          if (cell.row === row && cell.col === col) {
            return { ...cell, type: 'empty' as const };
          }
          if (cell.row === targetRow && cell.col === targetCol) {
            return { ...cell, type: 'miner' as const };
          }
          return cell;
        });

        // Save victory state in Firestore in background
        completeGame(prev.player.id, prev.player.score, prev.gameDuration, false).catch(console.error);

        return {
          ...prev,
          minerPosition: { row: targetRow, col: targetCol },
          boardItems: updatedBoard,
          showGameComplete: true,
        };
      }

      // 2. Step on Question Star
      if (targetCell.type === 'star') {
        // Load active question matching player's current station
        const stationNumber = prev.player.currentStation;
        
        // Trigger question load in state
        // We will fetch it in handleAnswer or directly here
        // We use mock station or fetch it. Let's trigger state change so UI displays the question card
        // We use lazy load by triggering a non-blocking state updates
        return {
          ...prev,
          previousPosition: { row, col },
          // Temporarily move miner position to target so we know which star they are on
          minerPosition: { row: targetRow, col: targetCol },
          isLoading: true, // will be reset when question loads
        };
      }

      // 3. Move to Empty cell
      const updatedBoard = prev.boardItems.map((cell) => {
        if (cell.row === row && cell.col === col) {
          return { ...cell, type: 'empty' as const };
        }
        if (cell.row === targetRow && cell.col === targetCol) {
          return { ...cell, type: 'miner' as const, revealed: true };
        }
        return cell;
      });

      return {
        ...prev,
        minerPosition: { row: targetRow, col: targetCol },
        boardItems: updatedBoard,
      };
    });
  }, []);

  // Fetch question after stepping on star
  useEffect(() => {
    if (gameState.isLoading && gameState.previousPosition && !gameState.currentStation) {
      const stationNumber = gameState.player?.currentStation || 1;
      
      // Cycle questions if stationNumber exceeds total questions
      const finalStationNumber = ((stationNumber - 1) % TOTAL_STATIONS) + 1;

      getStation(finalStationNumber)
        .then((station) => {
          if (station) {
            station.timeLimit = 20; // Enforce exactly 20s limit
          }
          setGameState((prev) => ({
            ...prev,
            currentStation: station,
            isLoading: false,
            isAnswered: false,
            selectedAnswer: null,
            isCorrect: null,
          }));
        })
        .catch((err) => {
          console.error('Failed to load station question:', err);
          setGameState((prev) => ({ ...prev, isLoading: false }));
        });
    }
  }, [gameState.isLoading, gameState.previousPosition, gameState.currentStation, gameState.player?.currentStation]);

  const handleAnswer = useCallback((answerIndex: number) => {
    setGameState((prev) => {
      if (prev.isAnswered || !prev.currentStation || !prev.player || !prev.previousPosition) {
        return prev;
      }

      const isCorrect = answerIndex === prev.currentStation.correctAnswer;
      const scoreChange = isCorrect
        ? getScoreForDifficulty(prev.currentStation.difficulty)
        : -getPenaltyForDifficulty(prev.currentStation.difficulty);
      const newScore = Math.max(0, prev.player.score + scoreChange);
      
      const { row: targetRow, col: targetCol } = prev.minerPosition;
      const { row: prevRow, col: prevCol } = prev.previousPosition;

      let updatedBoard = [...prev.boardItems];
      let finalMinerPosition = { ...prev.minerPosition };
      let isLost = false;

      if (isCorrect) {
        // Clear star and place miner on it
        updatedBoard = prev.boardItems.map((cell) => {
          if (cell.row === prevRow && cell.col === prevCol) {
            return { ...cell, type: 'empty' as const };
          }
          if (cell.row === targetRow && cell.col === targetCol) {
            return { ...cell, type: 'miner' as const, revealed: true };
          }
          return cell;
        });
      } else {
        // Block path by turning the star into a bush
        updatedBoard = prev.boardItems.map((cell) => {
          if (cell.row === targetRow && cell.col === targetCol) {
            return { ...cell, type: 'bush' as const, revealed: true };
          }
          return cell;
        });

        // Push player back to previous position
        finalMinerPosition = { row: prevRow, col: prevCol };

        // Check if there is still a valid path to target (7, 7)
        const pathExists = hasValidPath(
          updatedBoard,
          finalMinerPosition,
          { row: 7, col: 7 }
        );

        if (!pathExists) {
          isLost = true;
          // Save defeat in Firestore in background
          completeGame(prev.player.id, newScore, prev.gameDuration, true).catch(console.error);
        }
      }

      const nextStation = isCorrect
        ? prev.player.currentStation + 1
        : prev.player.currentStation;

      // Update Firestore score
      updatePlayerScore(prev.player.id, newScore, nextStation).catch(console.error);

      return {
        ...prev,
        isAnswered: true,
        selectedAnswer: answerIndex,
        isCorrect,
        player: {
          ...prev.player,
          score: newScore,
          currentStation: nextStation,
        },
        boardItems: updatedBoard,
        minerPosition: finalMinerPosition,
        isLost,
        // Show proceed to next station overlay only if correct
        showStationComplete: isCorrect && !isLost,
      };
    });
  }, []);

  const proceedToNextStation = useCallback(async () => {
    setGameState((prev) => ({
      ...prev,
      currentStation: null,
      isAnswered: false,
      selectedAnswer: null,
      isCorrect: null,
      showStationComplete: false,
      previousPosition: null,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      ...initialGameState,
      boardItems: generateBoard(),
    });
  }, []);

  return {
    gameState,
    initializeGame,
    handleAnswer,
    moveMiner,
    proceedToNextStation,
    resetGame,
  };
}
