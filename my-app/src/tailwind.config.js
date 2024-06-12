/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { color: theme('colors.transparent') },
          '100%': { color: theme('colors.gray.100') },
        },
      }),
    },
    
  },
  plugins: [],
}

