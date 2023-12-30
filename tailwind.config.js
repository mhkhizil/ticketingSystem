/** @type {import('tailwindcss').Config}; */

export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
      'xxxs': '350px',
      'xxss':'500px'
  
    },
      fontFamily: {
        'Lobster': ["Lobster", 'sans-serif'],
      },
      fontSize: {
        xxs:'0.4rem'
      },
      boxShadow: {
        'spec': '0 3px 10px rgba(255, 255, 255, 0.7)',
      }
    },
  },
  plugins: [require("daisyui")],
}

