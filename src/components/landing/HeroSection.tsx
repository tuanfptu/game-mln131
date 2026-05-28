'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  // Decorative maze walls
  const walls = [
    { left: '3%', bottom: '0', size: '80px', delay: 0, emoji: '🧱' },
    { left: '12%', bottom: '0', size: '100px', delay: 0.3, emoji: '🧱' },
    { right: '3%', bottom: '0', size: '90px', delay: 0.2, emoji: '🧱' },
    { right: '14%', bottom: '0', size: '70px', delay: 0.6, emoji: '🧱' },
  ];

  return (
    <div className="relative min-h-screen landing-bg flex items-center justify-center overflow-hidden">
      {/* Animated clouds */}
      <motion.div
        animate={{ x: ['-10%', '110%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 text-6xl opacity-60"
      >
        ☁️
      </motion.div>
      <motion.div
        animate={{ x: ['110%', '-10%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 text-5xl opacity-40"
      >
        ☁️
      </motion.div>
      <motion.div
        animate={{ x: ['-10%', '110%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 5 }}
        className="absolute top-32 text-4xl opacity-50"
      >
        ⛅
      </motion.div>

      {/* Sun */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-8 right-12 text-7xl"
      >
        ☀️
      </motion.div>

      {/* Maze walls */}
      {walls.map((wall, i) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: wall.delay, duration: 0.8 }}
          className="absolute text-6xl"
          style={{
            left: wall.left,
            right: wall.right,
            bottom: wall.bottom,
            fontSize: wall.size,
          } as React.CSSProperties}
        >
          {wall.emoji}
        </motion.div>
      ))}

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/80 to-transparent" />

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-24 left-[30%] text-5xl"
      >
        🐿️
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-20 right-[25%] text-4xl"
      >
        ⭐
      </motion.div>

      {/* Treasure chest */}
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl"
      >
        🏆
      </motion.div>

      {/* Birds */}
      <motion.div
        animate={{ x: [-100, 500], y: [0, -30, 10, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-16 text-3xl"
      >
        🦅
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.h1
            className="font-game text-4xl sm:text-5xl md:text-7xl text-white text-shadow-game mb-4 leading-tight"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🏆 THÁM HIỂM
            <br />
            <span className="text-yellow-300">MÊ CUNG</span>
            <br />
            <span className="text-amber-200 text-3xl sm:text-4xl md:text-5xl">
              MLN131
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/90 font-body text-lg sm:text-xl mb-3 max-w-lg mx-auto"
        >
          Thử thách kiến thức <strong>Chương 6</strong>:
          <br />
          Vấn đề dân tộc và tôn giáo trong thời kỳ
          <br />
          quá độ lên chủ nghĩa xã hội
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60 font-body text-sm mb-8 max-w-md mx-auto"
        >
          Điều khiển 🐿️ vượt mê cung, trả lời câu hỏi ⭐ để mở đường và tìm 🏆!
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 text-sm font-body"
        >
          👇 Cuộn xuống để bắt đầu 👇
        </motion.div>
      </div>
    </div>
  );
}
