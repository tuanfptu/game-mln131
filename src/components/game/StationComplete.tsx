'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

interface StationCompleteProps {
  show: boolean;
  stationNumber: number;
  scoreGained: number;
  onContinue: () => void;
}

export default function StationComplete({
  show,
  stationNumber,
  scoreGained,
  onContinue,
}: StationCompleteProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && onContinue()}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-amber-400/50 text-center"
          >
            {/* Treasure animation */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl mb-4"
            >
              🏆
            </motion.div>

            {/* Sparkles */}
            <div className="flex justify-center gap-2 mb-4">
              {['✨', '💎', '⭐', '💎', '✨'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  className="text-2xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            <h2 className="font-game text-2xl text-amber-900 mb-2">
              Trạm {stationNumber} hoàn thành!
            </h2>
            <p className="font-body text-amber-700 mb-2">
              Bạn đã tìm thấy kho báu!
            </p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl px-6 py-3 inline-block mb-6"
            >
              <span className="font-game text-xl text-white">
                +{scoreGained} điểm ⭐
              </span>
            </motion.div>

            <div>
              <Button variant="gold" size="lg" onClick={onContinue} fullWidth>
                Tiếp tục hành trình ➡️
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
