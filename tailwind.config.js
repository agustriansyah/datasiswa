/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
        center: true,
        padding: '16px',
      },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        pacifico: ['Pacifico', 'cursive'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      width: {
        '75px': '75px',
        '300px': '300px',
      },
    },
  },
  plugins: [],
}

