'use client';

import { motion } from 'framer-motion';
import { AnswerState } from '@/types';

interface AnswerButtonProps {
  text: string;
  index: number;
  state: AnswerState;
  onClick: () => void;
  disabled: boolean;
}

const labels = ['A', 'B', 'C', 'D'];

const stateStyles = {
  idle: 'bg-white hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-400 text-gray-800',
  correct: 'bg-gradient-to-r from-emerald-400 to-green-500 border-2 border-green-600 text-white',
  incorrect: 'bg-gradient-to-r from-red-400 to-rose-500 border-2 border-red-600 text-white',
};

export default function AnswerButton({
  text,
  index,
  state,
  onClick,
  disabled,
}: AnswerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={disabled ? {} : { scale: 1.02, x: 5 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`
        ${stateStyles[state]}
        ${disabled && state === 'idle' ? 'opacity-60 cursor-not-allowed' : ''}
        w-full p-4 rounded-xl text-left
        flex items-center gap-4
        transition-all duration-300
        shadow-md hover:shadow-lg
        font-body text-base
        ${state === 'correct' ? 'animate-shake' : ''}
      `}
    >
      <span
        className={`
          w-10 h-10 rounded-lg flex items-center justify-center
          font-game font-bold text-lg
          ${state === 'idle'
            ? 'bg-amber-100 text-amber-700'
            : state === 'correct'
              ? 'bg-white/30 text-white'
              : 'bg-white/30 text-white'
          }
        `}
      >
        {labels[index]}
      </span>
      <span className="flex-1 font-semibold">{text}</span>
      {state === 'correct' && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl"
        >
          ✅
        </motion.span>
      )}
      {state === 'incorrect' && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl"
        >
          ❌
        </motion.span>
      )}
    </motion.button>
  );
}
