'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import GameHeader from '@/components/game/GameHeader';
import QuestionCard from '@/components/game/QuestionCard';
import GameBoard from '@/components/game/GameBoard';
import StationComplete from '@/components/game/StationComplete';
import GameComplete from '@/components/game/GameComplete';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Card from '@/components/ui/Card';
import { useGameState } from '@/hooks/useGameState';
import { useTimer } from '@/hooks/useTimer';
import { getScoreForDifficulty, formatTime } from '@/utils/helpers';

export default function GamePage() {
  const router = useRouter();
  const { 
    gameState, 
    initializeGame, 
    handleAnswer, 
    moveMiner,
    proceedToNextStation, 
    resetGame 
  } = useGameState();
  
  const { timeLeft, isRunning, isExpired, startTimer, pauseTimer } = useTimer();
  const [initialized, setInitialized] = useState(false);

  // Initialize game from sessionStorage
  useEffect(() => {
    const playerName = sessionStorage.getItem('playerName');
    const playerMssv = sessionStorage.getItem('playerMssv');
    const playerClassCode = sessionStorage.getItem('playerClassCode');

    if (!playerName || !playerMssv || !playerClassCode) {
      router.push('/');
      return;
    }

    initializeGame(playerName, playerMssv, playerClassCode).then(() => {
      setInitialized(true);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Bind keyboard listeners for WASD / Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable movement when showing a question, loading, or game is complete/lost
      if (
        gameState.currentStation || 
        gameState.showGameComplete || 
        gameState.isLost || 
        gameState.isLoading
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (e.key === 'ArrowUp' || key === 'w') {
        e.preventDefault();
        moveMiner('up');
      } else if (e.key === 'ArrowDown' || key === 's') {
        e.preventDefault();
        moveMiner('down');
      } else if (e.key === 'ArrowLeft' || key === 'a') {
        e.preventDefault();
        moveMiner('left');
      } else if (e.key === 'ArrowRight' || key === 'd') {
        e.preventDefault();
        moveMiner('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    gameState.currentStation, 
    gameState.showGameComplete, 
    gameState.isLost, 
    gameState.isLoading, 
    moveMiner
  ]);

  // Start question-level timer when a star is stepped on and question loads
  useEffect(() => {
    if (gameState.currentStation && !gameState.isAnswered) {
      startTimer(gameState.currentStation.timeLimit);
    }
  }, [gameState.currentStation?.stationNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  // Pause question-level timer when answered
  useEffect(() => {
    if (gameState.isAnswered) {
      pauseTimer();
    }
  }, [gameState.isAnswered, pauseTimer]);

  // Handle question-level timer expiry - auto submit wrong answer
  useEffect(() => {
    if (isExpired && !gameState.isAnswered && gameState.currentStation) {
      handleAnswer(-1); // -1 means timeout
    }
  }, [isExpired]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnswerClick = useCallback(
    (index: number) => {
      if (gameState.isAnswered || isExpired) return;
      handleAnswer(index);
    },
    [gameState.isAnswered, isExpired, handleAnswer]
  );

  const handleContinue = useCallback(async () => {
    await proceedToNextStation();
  }, [proceedToNextStation]);

  const handleViewLeaderboard = useCallback(() => {
    router.push('/leaderboard');
  }, [router]);

  const handlePlayAgain = useCallback(() => {
    resetGame();
    sessionStorage.clear();
    router.push('/');
  }, [resetGame, router]);

  // Loading state
  if (!initialized || !gameState.player || (gameState.isLoading && !gameState.boardItems.length)) {
    return (
      <div className="min-h-screen treasure-bg flex items-center justify-center">
        <LoadingSpinner text="Đang chuẩn bị hành trình..." size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen treasure-bg font-body text-gray-900">
      {/* Top Header */}
      <GameHeader player={gameState.player} station={gameState.currentStation} />

      {/* Main Game Area */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (5/12 width) - Question OR Stats Card */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {gameState.currentStation ? (
                // Active Question Panel
                <motion.div
                  key={`question-${gameState.currentStation.stationNumber}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuestionCard
                    station={gameState.currentStation}
                    selectedAnswer={gameState.selectedAnswer}
                    isCorrect={gameState.isCorrect}
                    isAnswered={gameState.isAnswered}
                    timeLeft={timeLeft}
                    isTimerRunning={isRunning}
                    onAnswer={handleAnswerClick}
                  />
                </motion.div>
              ) : (
                // Walk / Stats Wood Board Panel
                <motion.div
                  key="stats-wood-board"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bg-gradient-to-b from-amber-700 via-amber-800 to-amber-950 text-white rounded-3xl p-6 border-4 border-amber-600 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[400px]">
                    
                    {/* Ring Binding effect at top */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-amber-900/60 flex justify-around px-8">
                      <div className="w-4 h-6 -translate-y-3 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                      <div className="w-4 h-6 -translate-y-3 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                      <div className="w-4 h-6 -translate-y-3 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                    </div>

                    <div className="mt-4 text-center">
                      <h2 className="font-game text-2xl text-yellow-300 drop-shadow-md">
                        THÁM HIỂM MÊ CUNG
                      </h2>
                      <p className="text-sm font-semibold text-amber-200/80 mt-1 uppercase tracking-wider">
                        Chương 6: Dân tộc & Tôn giáo
                      </p>
                    </div>

                    {/* Big Wood Timer */}
                    <div className="my-6 bg-amber-950/70 border-2 border-amber-700 rounded-2xl p-6 text-center shadow-inner relative">
                      <p className="text-amber-300/80 font-bold text-xs uppercase tracking-widest mb-1">
                        ⏱️ THỜI GIAN THÁM HIỂM
                      </p>
                      <motion.div 
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="font-game text-5xl text-white tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                      >
                        {formatTime(gameState.gameDuration)}
                      </motion.div>
                    </div>

                    {/* Player Info Card */}
                    <div className="bg-amber-900/50 border border-amber-800 rounded-xl p-4 space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-amber-200">🤠 Nhà thám hiểm:</span>
                        <span className="font-bold text-white">{gameState.player.name}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-amber-200">🎓 MSSV:</span>
                        <span className="font-mono font-bold text-white">{gameState.player.mssv}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-amber-200">⭐ Điểm số:</span>
                        <span className="font-game text-lg text-yellow-300">{gameState.player.score}</span>
                      </div>
                    </div>

                    {/* Game Navigation Instructions */}
                    <div className="mt-4 bg-amber-950/30 rounded-xl p-3 border border-amber-800/40 text-xs text-amber-200/90 leading-relaxed">
                      <p className="font-bold text-yellow-400 mb-1">🎮 HƯỚNG DẪN DI CHUYỂN:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Dùng các phím **Mũi tên** hoặc **W, A, S, D** trên bàn phím.</li>
                        <li>Hoặc click chuột vào các ô lân cận để di chuyển chú sóc 🐿️.</li>
                        <li>Hãy tiến về phía đống ngọc quý 💎 ở góc dưới bên phải!</li>
                        <li>Tránh các bụi cây 🌳. Trả lời đúng các ngôi sao ⭐ để mở đường!</li>
                      </ul>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (7/12 width) - Game Board */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <GameBoard
                cells={gameState.boardItems}
                revealedCells={gameState.revealedCells}
                score={gameState.player.score}
                minerPosition={gameState.minerPosition}
                onCellClick={(row, col) => {
                  // Enable move on cell click if adjacent
                  const mRow = gameState.minerPosition.row;
                  const mCol = gameState.minerPosition.col;
                  const diffRow = row - mRow;
                  const diffCol = col - mCol;
                  
                  if (Math.abs(diffRow) + Math.abs(diffCol) === 1) {
                    if (diffRow === -1) moveMiner('up');
                    else if (diffRow === 1) moveMiner('down');
                    else if (diffCol === -1) moveMiner('left');
                    else if (diffCol === 1) moveMiner('right');
                  }
                }}
              />
            </motion.div>
          </div>

        </div>

        {/* Incorrect answer: show retry / continue button */}
        {gameState.isAnswered && !gameState.isCorrect && !gameState.isLost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-game px-8 py-3 rounded-xl shadow-lg shadow-amber-500/30 border-b-4 border-amber-700/50"
            >
              Quay lại bản đồ ➡️
            </motion.button>
          </motion.div>
        )}
      </main>

      {/* Station Complete Overlay (for correct answers) */}
      <StationComplete
        show={gameState.showStationComplete}
        stationNumber={gameState.player.currentStation - 1}
        scoreGained={
          gameState.currentStation
            ? getScoreForDifficulty(gameState.currentStation.difficulty)
            : 10
        }
        onContinue={handleContinue}
      />

      {/* Game Complete Overlay (handles both win and lost) */}
      {gameState.player && (
        <GameComplete
          show={gameState.showGameComplete || gameState.isLost}
          player={gameState.player}
          isLost={gameState.isLost}
          duration={gameState.gameDuration}
          onViewLeaderboard={handleViewLeaderboard}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}
