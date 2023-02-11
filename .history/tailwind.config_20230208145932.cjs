/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/images/bg-1.jpg')",
        'bg-2': "url('/images/bg-2.jpg')",
        'bg-3': "url('/images/bg-3.jpg')",
        'bg-4': "url('/images/bg-4.jpg')",
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