/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#146152',
        'warning': '#FFEC5C',
        'error': '#b52300',
      }
    }
  },
  plugins: [],
}

