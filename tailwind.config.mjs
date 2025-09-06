/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // #FFF9F0 with opacity support, so you can use bg-cream or bg-cream/25
        cream: "rgb(255 249 240 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
