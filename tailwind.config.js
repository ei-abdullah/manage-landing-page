/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "rgb(242, 76, 61)",
        blue: "rgb(30, 58, 138)",

        darkGrayishBlue: "rgb(143, 151, 164)",
        veryDarkBlue: "rgb(15, 25, 65)",
        veryPaleRed: "rgb(255, 233, 231)",
        veryLightGray: "rgb(250, 250, 250)",

        attribution: "rgb(23, 34, 79)",
      },
      fontFamily: {
        beVietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        "gradient-to-black-rgb": "linear-gradient(transparent, rgb(0, 0, 0))",
      },
    },
  },
  plugins: [],
};
