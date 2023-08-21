/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#f37821",
        secondary: "#05bb75",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
