/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

// const plugin = require('tailwindcss/plugin')
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#161F6D",
      "light-blue": "#00ABE1",
    },
    spacing: {
      "0": '0',
      "1": "8px",
      "2": "12px",
      "3": "16px",
      "4": "24px",
      "5": "32px",
      "6": "48px",
    },
    borderRadius: {
      'none': '0',
      'sm': '10px',
      'lg': '20px',
      'xl': '30px',
      'full': '9999px',
    },
  },
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     h1: { fontSize: theme("fontSize.2xl") },
    //     h2: { fontSize: theme("fontSize.xl") },
    //     h3: { fontSize: theme("fontSize.lg") },
    //   });
    // }),
  ],
};
