/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        intria: "var(--intria-sans)",
      },
      colors: {
        secondary: "var(--secondary-color)",
        secondary2: "var(--secondary-color-2"
      },
    },
  },
  plugins: [],
};
