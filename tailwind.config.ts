import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        treasure: {
          gold: '#FFD700',
          bronze: '#CD7F32',
          brown: '#8B4513',
          darkBrown: '#3E2723',
          green: '#2E7D32',
          lightGreen: '#4CAF50',
          darkGreen: '#1B5E20',
          sky: '#87CEEB',
          diamond: '#B9F2FF',
        },
      },
      fontFamily: {
        game: ['"Fredoka One"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'dig': 'dig 0.6s ease-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dig: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(-10deg)' },
          '50%': { transform: 'translateY(5px) rotate(10deg)' },
          '75%': { transform: 'translateY(-3px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
      backgroundImage: {
        'gradient-treasure': 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 50%, #3E2723 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA000 50%, #FF6F00 100%)',
        'gradient-sky': 'linear-gradient(180deg, #87CEEB 0%, #98FB98 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
