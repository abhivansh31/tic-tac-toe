/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mullish", "sans-serif"],
      },
      colors: {
        background: '#1e1e1e'
      }
    },
  },
  plugins: [],
}

