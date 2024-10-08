/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      },
    },
  },
  plugins: [],
}