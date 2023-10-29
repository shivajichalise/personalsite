/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E282A",
        secondary: "#DC8850",
        accent: "#A4CBB4",
        neutral: "#EF9995",
        "base-100": "#E4D8B4",
        "base-300": "#D4BF87",
      },
    },
  },
  plugins: [],
};
