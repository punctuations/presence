const typography = require("@tailwindcss/typography");

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // media or class
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  extend: {},
  plugins: [typography],
};
