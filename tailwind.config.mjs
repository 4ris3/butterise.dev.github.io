/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        butter: {
          50: '#FEFDF9',   // najjaśniejszy kremowy
          100: '#FDFBF7',  // bardzo jasny kremowy
          200: '#FBF8F2',  // jasny kremowy
          300: '#F8F4E8',  // średni kremowy
          400: '#F5EFD9',  // ciemniejszy kremowy
        }
      }
    },
  },
  plugins: [],
}
