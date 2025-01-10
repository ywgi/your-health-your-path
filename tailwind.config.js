/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        handwriting: ['"Oooh Baby"', 'cursive'],
      },
      colors: {
        'green-custom': '#6f9558',
        'teal-custom': '#315851',
        'coral-custom': '#c17557',
        'gold-custom': '#e6a501',
      },
    },
  },
}