'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
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

      {/* Sun */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-8 right-12 text-7xl"
      >
        ☀️
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-24 left-[25%] text-5xl"
      >
        🐿️
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-20 right-[20%] text-4xl"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl"
      >
        🏆
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.h1
            className="font-game text-4xl sm:text-5xl md:text-7xl text-white text-shadow-game mb-2 leading-tight"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🏛️ Trạm 1
          </motion.h1>
          <h2 className="font-game text-2xl sm:text-3xl md:text-5xl text-yellow-300 text-shadow-game mb-6">
            Nguồn Gốc Đức Tin
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/90 font-body text-base sm:text-lg mb-2 max-w-lg mx-auto"
        >
          Thử thách kiến thức <strong>Chương 6</strong>:
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 font-body text-sm sm:text-base mb-8 max-w-lg mx-auto"
        >
          Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH
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
