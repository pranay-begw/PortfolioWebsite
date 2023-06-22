/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'limelight' : ['Limelight'],
      }
    },
    backgroundImage: {
      'squiggleBg': "url('/src/static/squiggle_1.png')",
    },
    theme: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      }
    }
  },
  plugins: [],
}

