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

  screens: {
    mobile: '320px',

    // => @media (min-width: 480px) { ... }
    tablet: '480px',

    // => @media (min-width: 1024px) { ... }
    desktop: '1024px',

    // => @media (min-width: 640px) { ... }
    laptop: '1200px',

    

    // => @media (min-width: 1280px) { ... }
  }
}
