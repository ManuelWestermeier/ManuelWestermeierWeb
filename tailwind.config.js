/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#1A1D22',
        border: 'rgba(255,255,255,0.08)',
        accent: '#2F6FFF',
        accentBright: '#5B8CFF',
        text: '#EDEDED',
        muted: '#9AA0A8',
        violet: '#8B5CF6',
        teal: '#14C9A6',
        magenta: '#E23FA6',
      },
      borderRadius: {
        lg: '10px',
        xl: '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      fontFamily: {
        display: ['Lora Variable', 'Lora', 'serif'],
        body: ['Instrument Sans Variable', 'Instrument Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'blob-float': 'blobFloat 14s ease-in-out infinite',
        'blob-float-slow': 'blobFloat 20s ease-in-out infinite reverse',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%,-6%) scale(1.08)' },
          '66%': { transform: 'translate(-5%,4%) scale(0.94)' },
        },
      },
    },
  },
  plugins: [],
}
