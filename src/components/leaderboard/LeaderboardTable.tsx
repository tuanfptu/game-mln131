'use client';

import { motion } from 'framer-motion';
import { LeaderboardEntry } from '@/types';
import Card from '@/components/ui/Card';
import { formatTime } from '@/utils/helpers';

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  isLoading: boolean;
}

const rankEmojis: Record<number, string> = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
};

export default function LeaderboardTable({
  entries,
  isLoading,
}: LeaderboardTableProps) {
  if (isLoading) {
    return (
      <Card variant="dark" className="text-center">
        <p className="text-amber-400 font-body animate-pulse">Đang tải bảng xếp hạng...</p>
      </Card>
    );
  }

  if (entries.length === 0) {
    return (
      <Card variant="dark" className="text-center">
        <p className="text-amber-400/70 font-body">Chưa có ai hoàn thành thám hiểm!</p>
      </Card>
    );
  }

  return (
    <Card variant="dark" className="overflow-hidden p-0 border border-amber-600/30">
      <div className="p-4 bg-gradient-to-r from-amber-800/50 to-amber-700/50 border-b border-amber-600/30 flex justify-between items-center px-6">
        <h3 className="font-game text-xl text-amber-300 mx-auto">
          🏆 Danh Sách Kỷ Lục
        </h3>
      </div>

      <div className="divide-y divide-amber-800/30">
        {entries.map((entry, index) => (
          <motion.div
            key={`${entry.mssv}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`
              flex items-center justify-between px-6 py-4
              ${index < 3 ? 'bg-amber-900/20' : ''}
              hover:bg-amber-800/10 transition-colors
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl w-10 text-center">
                {rankEmojis[entry.rank] || `#${entry.rank}`}
              </span>
              <div>
                <p className="font-body font-bold text-amber-100 text-sm sm:text-base">
                  {entry.name}
                </p>
                <p className="font-body text-amber-400/60 text-xs sm:text-sm">
                  {entry.mssv} · {entry.classCode}
                </p>
              </div>
            </div>
            
            {/* Score & Duration Display */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="font-game text-base sm:text-lg text-amber-300">
                  ⭐ {entry.score}
                </span>
                <span className="text-amber-500/60 text-xs ml-1 block sm:inline">điểm</span>
              </div>
              
              <div className="text-right bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-800/50 min-w-[80px]">
                <span className="font-mono font-bold text-sm sm:text-base text-yellow-400">
                  ⏱️ {entry.duration !== undefined ? formatTime(entry.duration) : '--:--'}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </Card>
  );
}
