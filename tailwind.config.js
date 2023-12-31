/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage:{
        'Home':'url("../public/img/Background.jpeg")',
        'Home2':'url("../public/img/Background2.png")',
      },
      fontFamily:{
        Oburger: ['var(--font-Oburger)'],
        RedPeapers:['var(--font-RedPeppers)'],
        FoodList:['var(--font-FoodList)']
      },
      colors:{
        main: '#f4c015',
      },
    },
  },
  plugins: [],
}

