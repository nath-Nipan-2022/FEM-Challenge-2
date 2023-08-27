/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary_tomato: "hsl(var(--primary-tomato))",
        dark_slate_grey: "hsl(var(--dark-slate-grey))",
        charcoal_grey: "hsl(var(--charcoal-grey))",
        grey: "hsl(var(--grey))",
      },
      backgroundImage: {
        gradient_primary:
          "linear-gradient(90deg, #ff4e74, hsl(var(--primary-tomato)) )",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
