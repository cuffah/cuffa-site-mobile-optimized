/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ow-orange': '#FF8C00',
        'ow-blue': '#00A8E8',
      },
    },
  },
  plugins: [],
}
