/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        eclipse: {
          black: '#050308',
          void: '#0a0612',
          purple: {
            950: '#1a0b2e',
            900: '#2a0f4d',
            800: '#3d1670',
            700: '#5b21a6',
            600: '#7c3aed',
            500: '#9d4edd',
            400: '#b76bf0',
          },
        },
      },
    },
  },
  plugins: [],
}
