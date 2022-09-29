module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        roboto: ['Roboto', 'arial','sans-serif'],
      },
      colors: {
        'hero-black': '#202124',
        'topic-black': '#3c4043',
        'border-gray': '#e0e0e0',
        'border-dark-grey': '#9AA0A6',
        'dark-black': '#202124',
        'white-dark': '#e8eaed',
      },
      padding: {
        '5px': '5px',
        '3px': '3px',
      },
      letterSpacing: {
        widestPlus: '.01785714em',
      }
    },
  },
  plugins: [],
}
