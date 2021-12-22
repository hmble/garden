module.exports = {
  content: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ['"Fira Mono"', "monospace"],
      },
      colors: {
        darkgray: "#151515",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
