'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { formatTime } from '@/utils/helpers';

interface TimerProps {
  timeLeft: number;
  isRunning: boolean;
  totalTime: number;
}

export default function Timer({ timeLeft, isRunning, totalTime }: TimerProps) {
  const percentage = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0;
  const isUrgent = timeLeft <= 10 && timeLeft > 0;
  const isExpired = timeLeft <= 0;

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        {/* Timer icon */}
        <motion.div
          animate={isUrgent ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
          transition={{ duration: 0.5, repeat: isUrgent ? Infinity : 0 }}
          className="text-2xl"
        >
          {isExpired ? '💀' : isUrgent ? '⏰' : '⏱️'}
        </motion.div>

        {/* Time display */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={timeLeft}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`
                  font-game text-xl font-bold
                  ${isExpired ? 'text-red-600' : isUrgent ? 'text-red-500' : 'text-amber-800'}
                `}
              >
                {formatTime(timeLeft)}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden border border-amber-300/30">
            <motion.div
              className={`
                h-full rounded-full transition-colors duration-500
                ${isExpired
                  ? 'bg-red-500'
                  : isUrgent
                    ? 'bg-gradient-to-r from-red-500 to-orange-500'
                    : 'bg-gradient-to-r from-emerald-400 to-green-500'
                }
              `}
              initial={{ width: '100%' }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
