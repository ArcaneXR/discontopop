/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./examples/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        background: '#F7F7F7',
        text: '#2D3436',
        success: '#00C853',
        warning: '#FFD600',
        error: '#FF3D00',
      },
    },
  },
  plugins: [],
} 