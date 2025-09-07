/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // soft cream (optional, if you still want it)
        cream: "rgb(255 249 240 / <alpha-value>)",
        // brand background white
        brandwhite: "#f7faf9",
      },
    },
  },
  plugins: [],
};
