/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#000",
        primary: "#1d4ed8",
        secondary: "#7e22ce",
      },
    },
  },
  plugins: [],
};
