export interface Player {
  id: string;
  name: string;
  mssv: string;
  classCode: string;
  score: number;
  currentStation: number;
  duration?: number; // game completion time in seconds
  isGameLost?: boolean;
  completedAt?: Date | null;
  createdAt: Date;
}

export interface Station {
  id?: string;
  stationNumber: number;
  title: string;
  question: string;
  answers: string[];
  correctAnswer: number; // index of correct answer (0-3)
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // seconds
}

export interface GameState {
  player: Player | null;
  currentStation: Station | null; // current active question if on a star cell
  isLoading: boolean;
  isAnswered: boolean;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  showStationComplete: boolean;
  showGameComplete: boolean;
  revealedCells: number[];
  boardItems: BoardCell[];
  minerPosition: { row: number; col: number };
  previousPosition: { row: number; col: number } | null;
  gameDuration: number; // elapsed seconds
  isLost: boolean;
}

export interface BoardCell {
  id: number;
  type: 'empty' | 'bush' | 'star' | 'gem' | 'miner';
  revealed: boolean;
  row: number;
  col: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  mssv: string;
  classCode: string;
  score: number;
  duration?: number;
  completedAt?: Date | null;
}

export type AnswerState = 'idle' | 'correct' | 'incorrect';
