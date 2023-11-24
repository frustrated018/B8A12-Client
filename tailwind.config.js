/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          "primary": "#0e2967",
          "secondary": "#b9d4e9",
          "accent": "#ffa30f",
          "neutral": "#2c2020",
          "base-100": "#f2eded",
        },
        myDark: {
          "primary": "#98b3f1",
          "secondary": "#163146",
          "accent": "#f09400",
          "neutral": "#2c2020",
          "base-100": "#120d0d",
        },
      },
    ],
  },
}