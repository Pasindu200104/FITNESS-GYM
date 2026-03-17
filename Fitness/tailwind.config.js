/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cusyellow: "#D5A310",
        cuswhite: "#F1F0EB",
        cusgray: "#2C2C2C",
        cusblack: "#040304",
        cusbrown: "#292113",
      },
    },
  },
  plugins: [],
}
