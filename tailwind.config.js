const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: { large: "2rem" },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) rotate(90deg) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -40px) rotate(135deg) scale(1.1)",
          },
          "50%": {
            transform: "translate(0, 30px) rotate(45deg) scale(1)",
          },
          "75%": {
            transform: "translate(-30px, -25px) rotate(90deg) scale(0.9)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
