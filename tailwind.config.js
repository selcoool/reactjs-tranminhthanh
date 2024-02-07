/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
   
    
      
    extend: {
      backgroundImage: {
        'background-store':"url('/public/glassesImage/background.jpg')",
        'background-model':"url('/public/glassesImage/model.jpg')",
  
      },
      colors: {
        'blue2': '#000000',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      
     
      
    },
  },
  plugins: [],
}

