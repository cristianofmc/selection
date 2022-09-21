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
