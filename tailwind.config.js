/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        wide: "1200px",
        medium: "740px",
      },
    },
  },
  plugins: [],
};
