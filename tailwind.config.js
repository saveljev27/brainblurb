/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#289CB0',
        'nav-cyan': '#11414A',
        'footer-lightblue': '#DAEFF3',
        'footer-gray': '#8C8C8C',
        'footer-title': '#231F20',
        'newsletter-btn': '#CCDBDC',
      },
      fontFamily: {
        text: ['Montserrat', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '0.1px',
        tightester: '0.16px',
        title: '0.48px',
      },
      screens: {
        xs: '390px',
        lgpro: '1025px',
      },
    },
  },
  plugins: [],
};
