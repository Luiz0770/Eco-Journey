/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranch: ['Rancho', 'cursive'], // Fonte Rancho
        poppins: ['Poppins', 'sans-serif'], // Fonte Poppins
      },
      colors: {
        heroText: '#017880', // Cor personalizada usada no texto do hero
        lightgreen: '#808C83',
      },
    },
  },
  plugins: [],
};
