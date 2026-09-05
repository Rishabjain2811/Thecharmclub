/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0B0B0D',
        'brand-pink': '#E8A7D8',
        'brand-blush': '#F5D7EC',
        'brand-offwhite': '#FAF8F9',
        'brand-white': '#FFFFFF',
        'brand-grey': '#777777',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
