module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkCyan: "#19a2ae",
        darkblue: "#2d3248",
        grayishBlue: "#6a6f81",
        darkGrey: "#969696",
      },
      fontFamily: {
        body: ["Kumbh Sans"],
      },
      backgroundImage: (theme) => ({
        "card-pattern": "url('/public/images/bg-pattern-card.svg')",
      }),
      minWidth: {
        0: "0",
        min: "375px",
        max: "1440",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
