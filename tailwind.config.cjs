/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        "off-light": "#f2f2f2",
        dark: "#212121",
        "off-dark": "#2D2D2D",
        primary: "#1d4ed8",
        secondary: "#7e22ce",
      },
    },
  },
  plugins: [],
};
