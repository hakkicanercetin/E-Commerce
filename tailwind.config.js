/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'second-banner': "url('/src/assets/secondBannerBg.png')",
        'custom-gradient': 'linear-gradient(90deg, #387EC7, #1F23AA)'
      }),
      
    },
  },
  plugins: [],
}