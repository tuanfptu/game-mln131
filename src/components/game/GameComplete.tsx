'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@/types';
import Button from '@/components/ui/Button';
import { formatTime } from '@/utils/helpers';

interface GameCompleteProps {
  show: boolean;
  player: Player;
  isLost?: boolean;
  duration?: number;
  onViewLeaderboard: () => void;
  onPlayAgain: () => void;
}

export default function GameComplete({
  show,
  player,
  isLost = false,
  duration = 0,
  onViewLeaderboard,
  onPlayAgain,
}: GameCompleteProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className={`rounded-3xl p-8 max-w-lg w-full shadow-2xl border-4 text-center ${
              isLost
                ? 'bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 border-red-600 text-white'
                : 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 border-amber-400 text-amber-950'
            }`}
          >
            {isLost ? (
              <>
                {/* Defeat Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl mb-4"
                >
                  😭
                </motion.div>

                <h2 className="font-game text-3xl text-red-500 mb-2">
                  GAME OVER!
                </h2>
                <p className="font-body text-red-300 text-lg mb-6">
                  Tiếc quá {player.name}, tất cả đường đi tới đích đều đã bị các bụi rậm chặn kín!
                </p>

                {/* Score card for lost */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 mb-6 shadow-lg shadow-red-900/30"
                >
                  <p className="text-red-200 font-body text-sm mb-1">Điểm số đạt được</p>
                  <p className="font-game text-5xl text-white">
                    {player.score}
                  </p>
                  <p className="text-red-200 font-body text-sm mt-1">điểm</p>
                </motion.div>
              </>
            ) : (
              <>
                {/* Crown animation */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl mb-4"
                >
                  👑
                </motion.div>

                {/* Celebration emojis */}
                <div className="flex justify-center gap-2 mb-4">
                  {['🎊', '🎉', '✨', '🎉', '🎊'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                      className="text-3xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>

                <h2 className="font-game text-3xl text-amber-900 mb-2">
                  Chúc mừng, {player.name}!
                </h2>
                <p className="font-body text-amber-700 text-lg mb-6">
                  Bạn đã chinh phục thành công Kho Báu Mê Cung!
                </p>

                {/* Score card for win */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-2xl p-6 mb-6 shadow-lg shadow-amber-500/30"
                >
                  <div className="grid grid-cols-2 gap-4 divide-x divide-white/20">
                    <div>
                      <p className="text-amber-100 font-body text-xs mb-1">Tổng điểm</p>
                      <p className="font-game text-4xl text-white">
                        {player.score}
                      </p>
                      <p className="text-amber-100 font-body text-xs mt-1">điểm</p>
                    </div>
                    <div>
                      <p className="text-amber-100 font-body text-xs mb-1">Thời gian chơi</p>
                      <p className="font-game text-4xl text-white">
                        {formatTime(duration)}
                      </p>
                      <p className="text-amber-100 font-body text-xs mt-1">phút : giây</p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}

            {/* Player info */}
            <div className={`rounded-xl p-4 mb-6 text-sm font-body text-left ${
              isLost ? 'bg-white/10 text-gray-300' : 'bg-white/50 text-amber-800'
            }`}>
              <div className="flex justify-between mb-1">
                <span>MSSV:</span>
                <span className="font-bold">{player.mssv}</span>
              </div>
              <div className="flex justify-between">
                <span>Lớp:</span>
                <span className="font-bold">{player.classCode}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              {!isLost && (
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={onViewLeaderboard}
                >
                  🏅 Xem Bảng Xếp Hạng
                </Button>
              )}
              <Button
                variant={isLost ? 'danger' : 'secondary'}
                size="md"
                fullWidth
                onClick={onPlayAgain}
              >
                🔄 Chơi Lại Từ Đầu
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
