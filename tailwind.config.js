/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth:{
       '250px' : '250px',
      },
      minHeight:{
        '150px' : '150px',
       },
       fontFamily: {
        'IrishG' : ['Irish Grover', 'sans-serif'],
       }
    },
  },
  plugins: [],
}

