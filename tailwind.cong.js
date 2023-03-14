/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['var(--font-raleway)'],
        Inter: ['var(--font-inter)'],
      },
      colors: {
        brand: '#BD00FF',
        error: '#DA1E28',
        success: '#24A148',
        warning: '#F1C21B',
        info: '0043CE',
        gray: {
          10: '#F4F4F4',
          20: '#E0E0E0',
          30: '#C6C6C6',
          40: '#A8A8A8',
          50: '#8D8D8D',
          60: '#6F6F6F',
          70: '#525252',
          80: '#393939',
          90: '#262626',
          100: '#161616',
        },
        blue: {
          10: '#EDF5FF',
          20: '#D0E2FF',
          30: '#A6C8FF',
          40: '#78A9FF',
          50: '#4589FF',
          60: '#0F62FE',
          70: '#0043CE',
          80: '#002D9C',
          90: '#001D6C',
          100: '#001141',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
