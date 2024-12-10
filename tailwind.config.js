// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": "#55D6C2", // Define your custom color
      },
    },
  },
  plugins: [],
};
