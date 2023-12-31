/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',

      'md': '744px',

      'lg': '1200px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {},
=======
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "744px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Sans-serif"],
      },
    },
>>>>>>> f70ecddcce38252b039d42937605b5d121d235e0
  },
  plugins: [],
};
