/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        dim: {
          bodybg: "red",
        }
      },
      backgroundImage: {
        navBackground: "url('/images/backgroundImage-coveNav.png')",
      }
    },
  },
  plugins: [],
}

