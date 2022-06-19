module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "booking-blue": "#003580",
        "booking-button": "#0071c2",
        "booking-button-hover": "#00487a",
        "booking-border": "#febb02",
        "booking-dark": "#00224f",
        "booking-orange": "#febb02",
      },
      width: {
        "booking-1024": "1024px",
      },
      borderWidth: {
        "1sm": "1px",
      },
      fontSize: {
        xxs: "10px",
      },
      flexGrow: {
        1: 1,
        3: 3,
      },
    },
  },
  plugins: [],
};
