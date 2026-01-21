import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Urbanist', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#fef5f2',
          100: '#fde8e0',
          200: '#fbd5c8',
          300: '#f7b6a3',
          400: '#f28d6e',
          500: '#ed6a45',
          600: '#CC6431',
          700: '#a84d26',
          800: '#8b4021',
          900: '#723820',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.4s ease-out',
        'accordion-up': 'accordion-up 0.4s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config

