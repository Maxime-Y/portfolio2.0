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
      },
    plugins: [],
  };
  