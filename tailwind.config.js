/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#54A4CC",
        formBlue: "#009FE3",
        white: "#ffffff",
        // text: "#22252C",
        theme:'#009FE3',
        text: "#424750",
      },
      fontFamily: {
        Euclid: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [],
};
