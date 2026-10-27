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
          primary: '#0D0D0D',
          surface: '#111111',
          surface2: '#141414',
        },
        border: {
          subtle: '#1F1F1F',
          muted: '#2A2A2A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A8A8A8',
          muted: '#6B6B6B',
          faint: '#4A4A4A',
        },
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.5s ease both',
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
      },
    },
  },
  plugins: [],
};
