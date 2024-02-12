/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url(/src/assets/bg1.png)"
      },
      fontFamily: {
        sans: ['Gotham-Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}