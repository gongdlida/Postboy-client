const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.html", "./components/**/*.vue", "./components/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
};
