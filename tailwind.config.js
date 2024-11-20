/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranch: ['Rancho', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors: {
        heroText: '#017880',
        lightgreen: '#808C83', 
        darkgreen: '#165D31',
        darkestgreen: '#073418',
      },
    },
  },
  plugins: []
};
