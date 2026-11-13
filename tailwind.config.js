/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '390px',
      },
      maxWidth: {
        'site': '1440px',
        'content': '1200px',
        'text': '68ch',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#0A0A0A',
          surface: '#111111',
          surface2: '#161616',
        },
        border: {
          subtle: '#1E1E1E',
          muted: '#2A2A2A',
        },
        text: {
          primary: '#F2F0EA',
          secondary: '#A6A39D',
          muted: '#6B6B6B',
          faint: '#4A4A4A',
        },
        shaya: {
          gold: '#C9A96E',
          'gold-dim': '#A8853F',
          'gold-bright': '#E0C17A',
        },
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.5s ease both',
        'shaya-pulse': 'shayaPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shayaPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
