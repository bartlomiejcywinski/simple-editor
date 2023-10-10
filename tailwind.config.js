/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth:{
       '250px' : '250px',
       },
      width:{
        '500' : '500px',
       },
      height:{
        '300' : '300px',
       },
      minHeight:{
        '150px' : '150px',
       },
       fontFamily: {
        'IrishG' : ['Irish Grover', 'sans-serif'],
        'Inter' : ['Inter']
       },
       colors:{
        'bg-custom-gray' : '#949494',
       }
    },
  },
  plugins: [],
}

