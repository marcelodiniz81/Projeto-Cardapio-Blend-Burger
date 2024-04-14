// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: { fontFamily:{
    'sans': ['Roboto', 'sans-serif']
  },
    extend: {
      backgroundImage: {
        "home": "url('/Assets/bg-png' )"
      }
    },
  },
  plugins: [],
}

// // extend: {
// backgyound Image: {
// "home": "url('/assets/bg-png' )"
// }
// plugins: [],

