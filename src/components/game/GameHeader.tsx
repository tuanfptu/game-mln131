'use client';

import { motion } from 'framer-motion';
import { Player, Station } from '@/types';
import { TOTAL_STATIONS } from '@/data/mockStations';

interface GameHeaderProps {
  player: Player;
  station: Station | null;
}

export default function GameHeader({ player, station }: GameHeaderProps) {
  // Use player's current station number
  const stationNum = player.currentStation;
  const progressPercent = Math.min(100, ((stationNum - 1) / TOTAL_STATIONS) * 100);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-900 border-b-4 border-amber-600/50 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Station info */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              🏆
            </motion.div>
            <div>
              <h1 className="font-game text-lg text-amber-300">
                Trạm 1 — Câu {stationNum}/{TOTAL_STATIONS}
              </h1>
              <p className="text-amber-100/80 text-sm font-body truncate max-w-[250px] sm:max-w-none">
                {station ? station.title : 'Đang tìm đường đến đích... 🏆'}
              </p>
            </div>
          </div>

          {/* Center: Player info */}
          <div className="flex items-center gap-4 text-sm font-body">
            <div className="flex items-center gap-2 bg-amber-800/50 rounded-lg px-3 py-1.5">
              <span className="text-amber-300">🎓</span>
              <span className="text-amber-100">{player.mssv}</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-800/50 rounded-lg px-3 py-1.5">
              <span className="text-amber-300">🏫</span>
              <span className="text-amber-100">{player.classCode}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-amber-800/50 rounded-lg px-3 py-1.5">
              <span className="text-amber-300">👤</span>
              <span className="text-amber-100 truncate max-w-[120px]">{player.name}</span>
            </div>
          </div>

          {/* Right: Score */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl px-4 py-2 shadow-lg shadow-amber-500/30"
            >
              <span className="font-game text-lg text-amber-900">
                ⭐ {player.score} điểm
              </span>
            </motion.div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-2 bg-amber-800/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${progressPercent}%`,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.header>
  );
}
