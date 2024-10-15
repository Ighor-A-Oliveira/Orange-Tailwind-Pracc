/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        my_teal: '#008080',
        pale_orange: '#ffd9a6',
        light_orange: '#fbb03b',
        orange: '#f7931e'
      },
      fontFamily:{
        sans: ['Bebas Neue', 'san-serif'],
        slab: ['Roboto Slab', 'serif'],
        josef: ['Josefin Sans', 'sans-serif'],
        title: ['Playfair Display SC', 'serif']

      },
      backgroundImage:{
        mobile:'url("bg-mobile.png")',
        desktop:'url("bg-desktop.png")',
      
      }
    },
  },
  plugins: [],
}