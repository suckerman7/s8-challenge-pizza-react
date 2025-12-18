/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        condensed: ['Roboto Condensed', 'sans-serif'],
        barlow: ["Barlow", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
};