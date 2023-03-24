/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px",
      "2xl": "1660px",
    },
    colors: {
      pink: "#ff004d",
      orange: "#e76f00",
      black: "#212529",
      white: "#fff",
      lightGrey: "#ced4da",
      softGrey: "#adb5bd",
      darkGrey: "#495057",

      
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
}
