// src/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        'nc-red': '#E53E3E', // Un rojo personalizado para el logo y los hover.
        'nc-dark': '#1A202C', // Un color oscuro personalizado.
    },
  },
    fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
}