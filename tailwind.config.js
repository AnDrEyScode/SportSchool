/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': '#1e3685',
    },
  },
  plugins: [],
  
}

