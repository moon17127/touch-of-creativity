/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // we start to customize colors and fonts
  theme: {
    extend: {
      height: {
        height_bg: '730px',
        alt_height: '600px',
        section: '400px',
        swiper: '450px',
        small_screen: '250px',
        iframe: '350px',
      },
      width: {
        30: '30%',
      },
      fontSize: {
        '5xl': '4.2rem',
        '4xl': '2.5rem',
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: 'rgb(242, 169, 74)',
        bg: 'rgba(0, 0, 0, 0.7)',
        alt: ' rgba(255, 255, 255)',
        alt_bg: 'rgb(210, 244, 244)',
      },
    },
  },
  plugins: [],
};
