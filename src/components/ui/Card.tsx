'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowing?: boolean;
  variant?: 'default' | 'dark' | 'treasure';
}

const variantStyles = {
  default: 'bg-white/90 backdrop-blur-sm border border-amber-200/50',
  dark: 'bg-gray-900/90 backdrop-blur-sm border border-amber-500/30 text-white',
  treasure: 'bg-gradient-to-br from-amber-50 to-yellow-100/80 backdrop-blur-sm border-2 border-amber-400/50',
};

export default function Card({
  children,
  className = '',
  glowing = false,
  variant = 'default',
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        ${variantStyles[variant]}
        ${glowing ? 'animate-pulse-glow' : ''}
        rounded-2xl shadow-xl p-6
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
