// https://itnext.io/how-to-use-tailwind-css-with-react-16e9d478b8b1
var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')]
};
