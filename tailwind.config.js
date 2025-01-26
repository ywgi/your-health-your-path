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
        handwriting: ['Oooh Baby', 'cursive'],
        handwriting2: ['Montez', 'serif'],
        quote: ['Sour Gummy', 'serif']
      },
      colors: {
        'green-custom': '#6f9558',
        'teal-custom': '#315851',
        'coral-custom': '#c17557',
        'gold-custom': '#e6a501',
        'light-pink-custom': '#f2e8e6',
        'purple-custom': '#805994'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in .5s ease-out forwards'
      }
    },
  },
}