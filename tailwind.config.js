/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            anta: ["var(--font-anta)", "sans-serif"],
            dancing: ["var(--font-dancing-script)", "cursive"],
          },
        },
        screens: {
            'xs': '480px',  
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          },
      },
    plugins: [],
  };
  