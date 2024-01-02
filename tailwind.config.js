/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "37px",
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
