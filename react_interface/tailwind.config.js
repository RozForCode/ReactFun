/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // content: ["./src/**/*.{html,js}", "./public/index.html",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

