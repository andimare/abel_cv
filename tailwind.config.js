module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'handset': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'cinema': '1536px',
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      skew:{
        '30':'30deg',
        '60':'60deg',
        '75':'75deg'
      },
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      }
    },
  },
  variants: {
    extend: {
      width:['hover','focus'],
      margin:['hover','focus'],
      fontSize:['hover','focus']
    },
  },
  plugins: [],
}
