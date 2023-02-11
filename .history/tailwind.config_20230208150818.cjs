/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('../../assets/service1.jpeg')",
        'bg-2': "url('../../assets/hero.jpeg')",
        'bg-3': "url('../../assets/service2.jpeg')",
        'bg-4': "url('../../assets/service3.jpeg')",
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}