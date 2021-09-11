const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");
module.exports = {
  mode: "jit",
  purge: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
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
      typography: {
        DEFAULT: {
          css: {
            "*,*::before,*::after": {
              color: colors.black,
            },
            color: colors.black,
            a: {
              color: colors.purple["500"],
              textDecoration: "none",
              backgroundColor: "red.400",
            },
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
        dark: {
          css: {
            "*,*::before,*::after": {
              color: "#F4F6FF",
            },
            color: colors.white,
            a: {
              color: colors.purple["500"],
              textDecoration: "none",
            },
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
    // ...
  ],
};
