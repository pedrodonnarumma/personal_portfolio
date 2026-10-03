/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070f',
          900: '#0a0f1e',
          800: '#111831',
        },
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(4%, 6%, 0) scale(1.08)' },
        },
      },
      animation: {
        'drift-slow': 'drift 18s ease-in-out infinite',
        'drift-slower': 'drift 26s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
}
