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
        primary:  "var(--primary-color)",
        secondary1: "var(--secondary-color-1)",
        secondary2: "var(--secondary-color-2)",
        secondary3: "#262626", 
        secondary4: "#373435", 
      },
      boxShadow: {
        customShadow1: "0px 50px 60px 14px #22222224"
      }
    },
  },
  plugins: [],
};
