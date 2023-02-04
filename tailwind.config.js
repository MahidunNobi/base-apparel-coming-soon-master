/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'desaturatedRed': "hsl(0, 36%, 70%)",
        'softRed': "hsl(0, 93%, 68%)",
        'darkGrayishRed': "hsl(0, 6%, 24%)",
        // Gradient Colors
        '1.1': "hsl(0, 0%, 100%)",
        '1.2': "hsl(0, 100%, 98%)",
        '2.1': "hsl(0, 80%, 86%)",
        '2.2': "hsl(0, 74%, 74%)"

      }
    },
  },
  plugins: [],
}
