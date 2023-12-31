/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-gray': '#4C5053',
      },
      // container: {
      //    center: true,
      //    padding: {'120px':' 0px' }
      // },
      height : {
        '400' : '400px'
      }
    },
  },
  plugins: [],
}

