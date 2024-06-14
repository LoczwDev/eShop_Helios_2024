const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        brown: "#930d18",
        blueDe: "#2a3f50",
        soft: "#4D4D4D",
        price: "#eb0000",
        hard: "#777",
        inputBor: "#E0E0E0",
      },
      boxShadow: {
        display: "0px 1px 69.16px 6.84px rgba(20,64,51,0.05)",
        cartDown: "0px 3px 25px 0px rgba(31,38,67,0.1)",
      },
      keyframes: {
        popup: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-50deg)" },
          "20%": { transform: "rotate(50deg)" },
          "30%": { transform: "rotate(-50deg)" },
          "40%": { transform: "rotate(50deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "popup-hand": "popup 1s infinite ease-out",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
