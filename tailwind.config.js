module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        roboto: ['Roboto', 'arial','sans-serif'],
      },
      colors: {
        'button-hero-black':'#303134',
        'hero-black': '#202124',
        'topic-black': '#3c4043',
        'dark-black': '#202124',
        'white-dark': '#e8eaed',
        'border-gray': '#e0e0e0',
        'topic-border-dark-grey': '#9AA0A6',
        'project-dark-border': '#5f6368',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
