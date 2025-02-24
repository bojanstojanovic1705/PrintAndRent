/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',  // tamno zelena
          light: '#3B7A33',
        },
        secondary: {
          DEFAULT: '#4A4A4A',  // tamno siva
          light: '#6B6B6B',
        },
        accent: '#E8F3E6',     // svetlo zelena za pozadine
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
