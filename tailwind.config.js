/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      //ბაქგრაუნდ სურათი
      backgroundImage: {
        'hero-pattern': "url('/image/bg-photo.jpg')",
      }
    },
  },
  plugins: [],
}
