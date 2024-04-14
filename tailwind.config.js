/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'   
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Roboto', sans-serif",  
      },
      colors: {
        'pkdex-red-strong' : '#FF2B31',
        'pkdex-red-dark' : '#F2454C',
        'pkdex-red-darker' : '#7C1517',
      },
      screens: {
        'reg': '830px',   
      },
    },
  },
  plugins: [],
}

