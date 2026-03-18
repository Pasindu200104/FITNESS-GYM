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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        fitnesstheme: {
          "primary": "#D5A310",
          "secondary": "#2C2C2C",
          "accent": "#f3f4f6",
          "neutral": "#1f2937",
          "base-100": "#0f172a",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
}
