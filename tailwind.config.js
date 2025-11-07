/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222, 47%, 11%)',
        foreground: 'hsl(213, 31%, 91%)',
        card: 'hsl(222, 47%, 11%)',
        'card-foreground': 'hsl(213, 31%, 91%)',
        popover: 'hsl(222, 47%, 11%)',
        'popover-foreground': 'hsl(213, 31%, 91%)',
        primary: 'hsl(270, 91%, 65%)',
        'primary-foreground': 'hsl(0, 0%, 100%)',
        secondary: 'hsl(217, 33%, 17%)',
        'secondary-foreground': 'hsl(213, 31%, 91%)',
        muted: 'hsl(217, 33%, 17%)',
        'muted-foreground': 'hsl(215, 20%, 65%)',
        accent: 'hsl(217, 33%, 17%)',
        'accent-foreground': 'hsl(213, 31%, 91%)',
        destructive: 'hsl(0, 84%, 60%)',
        'destructive-foreground': 'hsl(213, 31%, 91%)',
        border: 'hsl(217, 33%, 17%)',
        input: 'hsl(217, 33%, 17%)',
        ring: 'hsl(270, 91%, 65%)',
        neon: {
          violet: '#a855f7',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.4s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(168, 85, 247, 0.5), 0 0 10px rgba(168, 85, 247, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)' 
          },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

