/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "270px",
      sm: "375px",
      md: "744px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Sans-serif"],
        inter: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
