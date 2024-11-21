/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
      fontFamily: {
        ranch: ['Rancho', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        heroText: '#017880',
        bege: '#ffefd5',
        darkBege: '#EFD8B2',
        lightgreen: '#808C83',
        darkgreen: '#165D31',
        darkestgreen: '#073418',
      },
      backgroundImage: {
        gradient:  `linear-gradient(
          180deg,
          hsl(37deg 56% 77%) 0%,
          hsl(37deg 58% 78%) 3%,
          hsl(37deg 59% 79%) 7%,
          hsl(37deg 61% 80%) 12%,
          hsl(37deg 63% 82%) 18%,
          hsl(37deg 65% 83%) 25%,
          hsl(37deg 68% 84%) 33%,
          hsl(37deg 71% 85%) 42%,
          hsl(37deg 74% 87%) 52%,
          hsl(37deg 79% 88%) 63%,
          hsl(37deg 84% 89%) 75%,
          hsl(37deg 91% 90%) 87%,
          hsl(37deg 100% 92%) 100%
        )`,
      },
    },
  },
  plugins: []
};
