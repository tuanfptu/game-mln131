'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export default function LoadingSpinner({ text = 'Đang tải...', size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <motion.div
        className={`${sizeMap[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-amber-200" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-600 border-r-amber-500" />
      </motion.div>

      <motion.div
        className="flex gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {['⛏️', '💎', '🏆'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
            className="text-2xl"
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      <p className="text-amber-800 font-body font-semibold text-sm">{text}</p>
    </div>
  );
}
