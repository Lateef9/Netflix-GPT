/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'white': '0 0 10px rgba(, , 255, 1)',
        'yellow': '0 0 10px rgba(255, 255, 0, 1)',
        
      }
    },
  },
  plugins: [],
}

