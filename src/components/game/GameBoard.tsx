'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BoardCell } from '@/types';
import { getCellEmoji } from '@/utils/helpers';
import Card from '@/components/ui/Card';

interface GameBoardProps {
  cells: BoardCell[];
  revealedCells: number[];
  score: number;
  minerPosition: { row: number; col: number };
  onCellClick?: (row: number, col: number) => void;
}

export default function GameBoard({
  cells,
  revealedCells,
  score,
  minerPosition,
  onCellClick,
}: GameBoardProps) {
  
  const isAdjacent = (row: number, col: number) => {
    const diffRow = row - minerPosition.row;
    const diffCol = col - minerPosition.col;
    return Math.abs(diffRow) + Math.abs(diffCol) === 1;
  };

  return (
    <Card variant="dark" className="h-full relative overflow-hidden">
      
      {/* Board Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            🗺️
          </motion.span>
          <h3 className="font-game text-lg text-amber-400">Bản Đồ Thám Hiểm</h3>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/20 rounded-lg px-3 py-1 border border-amber-500/30">
          <span className="text-amber-400 text-sm font-bold font-body">⭐ {score} điểm</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-8 gap-1 p-2 bg-amber-950/40 rounded-2xl border border-amber-700/50 relative">
        {cells.map((cell) => {
          const adjacent = isAdjacent(cell.row, cell.col);
          const isMiner = cell.type === 'miner';
          const isGem = cell.type === 'treasure';
          const isBush = cell.type === 'bush';
          const isStar = cell.type === 'star';

          return (
            <motion.div
              key={cell.id}
              onClick={() => onCellClick?.(cell.row, cell.col)}
              whileHover={adjacent && !isBush ? { scale: 1.05 } : {}}
              whileTap={adjacent && !isBush ? { scale: 0.95 } : {}}
              className={`
                aspect-square rounded-xl flex items-center justify-center
                text-2xl sm:text-3xl md:text-4xl select-none
                transition-all duration-300 relative
                ${isMiner 
                  ? 'bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-white shadow-lg shadow-amber-500/50 z-10 scale-105 animate-pulse-glow'
                  : isBush
                    ? 'bg-emerald-950/60 border border-emerald-800/40'
                    : isGem
                      ? 'bg-gradient-to-tr from-cyan-500/40 to-blue-500/40 border-2 border-cyan-400/50 animate-pulse'
                      : isStar
                        ? 'bg-amber-800/30 border border-yellow-500/30 hover:border-yellow-400/60'
                        : 'bg-amber-950/30 border border-amber-800/20'
                }
                ${adjacent && !isBush ? 'cursor-pointer ring-2 ring-yellow-400/40 ring-offset-1 ring-offset-amber-950/60 hover:bg-yellow-500/10' : 'cursor-default'}
              `}
            >
              <AnimatePresence mode="wait">
                {cell.revealed || isMiner ? (
                  <motion.span
                    key={`emoji-${cell.id}-${cell.type}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="drop-shadow-md"
                  >
                    {getCellEmoji(cell.type)}
                  </motion.span>
                ) : (
                  <motion.span
                    key={`hidden-${cell.id}`}
                    className="text-amber-800/20 font-bold"
                  >
                    ■
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Indicator overlay for reachable tiles */}
              {adjacent && !isBush && (
                <div className="absolute inset-0 bg-yellow-400/5 rounded-xl border border-yellow-400/20 animate-pulse"></div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 bg-amber-950/20 border border-amber-800/30 rounded-xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-body">
        {[
          { emoji: '🐿️', label: 'Chú sóc (Bạn)' },
          { emoji: '🌳', label: 'Bụi rậm (Chặn)' },
          { emoji: '⭐', label: 'Ngôi sao (Câu hỏi)' },
          { emoji: '💎', label: 'Viên ngọc (Đích)' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-amber-200/90">
            <span className="text-sm bg-amber-900/40 w-6 h-6 flex items-center justify-center rounded-md border border-amber-800/50">{item.emoji}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
