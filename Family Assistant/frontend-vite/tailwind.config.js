/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#781C69",
        secondary: "white",
        stroke: "#FFF4E2",
      },
      fontFamily: {
        tenor: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
