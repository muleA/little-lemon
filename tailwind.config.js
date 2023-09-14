export const content = ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'];
export const theme = {
  darkMode: 'class',
  extend: {
    colors: {
      primary: {
        50: '#f7fee7',
        100: '#ecfccb',
        200: '#d9f99d',
        300: '#bef264',
        400: '#059669',
        500: '#84cc16',
        600: '#65a30d',
        700: '#4d7c0f',
        800: '#059669',
        900: '#365314',
        950: '#1a2e05',
        DEFAULT: '#84cc16',
      },
      secondary: '#F4CE14',
      grayBackground: '#495E57',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem', // 48px
    },
  },
};
export const variants = {
  extend: {
    backgroundColor: ['active'],
    textColor: ['visited'], // Example of adding a visited variant for text color
  },
};
