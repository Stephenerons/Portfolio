/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        'outerBack': '5px -2px 10px rgba(162, 171, 173, 22%)',
        'outerInner': ' inset 2px 2px 10px rgba(255, 255, 255, 25%)',
        'screen': 'inset 4px -4px 18px rgba(0, 0, 0, 20%)',
        'buttonLeft':  '-2px 2px 16px rgba(255, 255, 255, 20%)',
        'buttonRight': '4px -4px 18px rgba(0, 0, 0, 30%)',
      },
    },
  },
  plugins: [],
}
