/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',
        gray100: '#EFEFEF',
        gray200: '#DFDFDF',
        gray300: '#C0C0C0',
        gray400: '#9C9C9C',
        gray500: '#6E6E6E',
        gray600: '#404040',
        gray700: '#1E1E1E',
        green500: '#7DCC3B',
        green600: '#65A430',
        green700: '#44642A',
      },
    },
  },
  plugins: [],
};
