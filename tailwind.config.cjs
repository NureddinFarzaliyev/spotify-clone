/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-black": 'font-black',
        'font-bold': 'font-bold',
        'font-light': 'font-light',
        'font-medium': 'font-medium'
      },
      colors: {
        'bg-1': '#000000',
        'bg-2': '#121212',
        'bg-3': '#181818',
        'button-gradient': 'linear-gradient(to bottom, #323232, #303030)',
        'gray-text': '#B3B3B3',
      }

    },
  },
  plugins: [],
}