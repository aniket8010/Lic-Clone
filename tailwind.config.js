/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-focus': '#86B7FE',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      ringColor: ['focus'],
    },
  },

  plugins: [],
}

