/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'maincolor': "#000a14",
        'textcolor': "#b3c2d1",
      },

      fontfamily: {
        'pangolin': "Pangolin"



      }
    },
  },
  plugins: [],
}

