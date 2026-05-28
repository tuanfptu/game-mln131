'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Timer from '@/components/ui/Timer';
import AnswerButton from './AnswerButton';
import { Station, AnswerState } from '@/types';

interface QuestionCardProps {
  station: Station;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  isAnswered: boolean;
  timeLeft: number;
  isTimerRunning: boolean;
  onAnswer: (index: number) => void;
}

export default function QuestionCard({
  station,
  selectedAnswer,
  isCorrect,
  isAnswered,
  timeLeft,
  isTimerRunning,
  onAnswer,
}: QuestionCardProps) {
  const getAnswerState = (index: number): AnswerState => {
    if (!isAnswered) return 'idle';
    if (index === station.correctAnswer) return 'correct';
    if (index === selectedAnswer && !isCorrect) return 'incorrect';
    return 'idle';
  };

  const difficultyConfig = {
    easy: { label: 'DỄ', color: 'bg-green-100 text-green-700 border-green-300' },
    medium: 'VỪA',
    hard: 'KHÓ',
  };

  const getDifficultyBadge = () => {
    switch (station.difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700 border border-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
      case 'hard':
        return 'bg-red-100 text-red-700 border border-red-300';
    }
  };

  const getDifficultyLabel = () => {
    switch (station.difficulty) {
      case 'easy': return 'DỄ';
      case 'medium': return 'VỪA';
      case 'hard': return 'KHÓ';
    }
  };

  return (
    <Card variant="treasure" className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl"
          >
            📜
          </motion.span>
          <div>
            <h2 className="text-xl font-game text-amber-900">
              Câu hỏi trạm {station.stationNumber}
            </h2>
            <span
              className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${getDifficultyBadge()}`}
            >
              {getDifficultyLabel()}
            </span>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="mb-6">
        <Timer
          timeLeft={timeLeft}
          isRunning={isTimerRunning}
          totalTime={station.timeLimit}
        />
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white/60 rounded-xl p-5 mb-6 border border-amber-200/30"
      >
        <p className="text-lg font-body font-semibold text-gray-800 leading-relaxed">
          {station.question}
        </p>
      </motion.div>

      {/* Answers */}
      <div className="space-y-3">
        {station.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            text={answer}
            index={index}
            state={getAnswerState(index)}
            onClick={() => onAnswer(index)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {/* Result message */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            mt-6 p-4 rounded-xl text-center font-game text-lg
            ${isCorrect
              ? 'bg-green-100 text-green-800 border-2 border-green-300'
              : 'bg-red-100 text-red-800 border-2 border-red-300'
            }
          `}
        >
          {isCorrect
            ? '🎉 Chính xác! Tuyệt vời!'
            : '😞 Sai rồi! Trừ điểm nhé!'}
        </motion.div>
      )}
    </Card>
  );
}
