/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#485D54",
      },
      fontFamily: {
        sarabun: ["'Sarabun'", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
