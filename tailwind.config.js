/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/post/*",
  ],
  theme: {
    extend: {
      colors:{
        'white':'#F5F5F5',
        'violet':'#572C57',
        'lightviolet':'#9F5F91',
        'orange':'#E28413',
        'flax':'#F6EA98'
      },
    },
  },
  plugins: [],
}