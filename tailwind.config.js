/** @type {import('tailwindcss').Config} */
export default {

  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    screens:{
      'sm': '280px',
      'md': '744px',
      'lg': '1200px',
    },
    extend: {fontFamily: { 'rubik': ["Rubik", "Sans-serif"] }},
  },
  plugins: [
    
    require('flowbite/plugin'),
  ]
};

