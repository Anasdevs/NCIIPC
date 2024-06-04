/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titleColor: '#284c79',
      },
      fontFamily: {
          inter: ['Inter', 'sans-serif'],
          overpass: ['Overpass', 'sans-serif']
      },
      animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          }
      }                    
  },
  },
  plugins: [],
}
