/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dim: {
          colorGray: "#ede8d0",
        }
      },
      backgroundImage: {
        navBackground: "url('/images/backgroundImage-coveNav.png')",
        BeDiffrentBg: "url('/images/360_F_611673746_sOmwqM334PXbw8Ptn7S3QNjcRoMVp8lZ.jpg')"
      },
      fontFamily: {
        custom1: 'My-Custom-Font1',
        custom2: 'My-Custom-Font2',
        custom3: 'My-Custom-Font3',
        custom4: 'My-Custom-Font4',
      },
    },
  },
  plugins: [],
}

