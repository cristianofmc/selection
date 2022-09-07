module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu"],
        roboto: ['Roboto', 'arial','sans-serif'],
      },
      colors: {
        'hero-black': '#202124',
      },
    },
  },
  plugins: [],
}
