/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "744px",
      // => @media (min-width: 744px) { ... }

      lg: "1200px",
      // => @media (min-width: 1728px) { ... }
      extend: {
        fontFamily: { rubik: ["Rubik", "Sans-serif"] },
      },
    },
    plugins: [],
  },
};
