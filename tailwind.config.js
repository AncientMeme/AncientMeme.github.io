/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,txs}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0a0a0a",
          secondary: "#607b7d",
          accent: "#f58a07",
          highlight: "#d25e1B",
          text: "#f1f7ed"
        }
      },
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

