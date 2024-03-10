/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "#fff",
        black: "#000",
        gray: {
          "100": "#7b7b7b",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(27, 27, 27, 0.08)",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(255, 255, 255, 0.2)",
          "600": "rgba(34, 34, 34, 0.1)",
        },
        silver: "#bcbcbc",
        darkslategray: "#333",
        midnightblue: "#010d3e",
        whitesmoke: "#f1f1f1",
        "neutral-300": "#eff0f7",
        "neutral-600": "#6f6c90",
        gainsboro: "#e6e6e6",
        darkgray: "#999",
        lavender: "#eaeefe",
      },
      spacing: {},
      fontFamily: {
        "body-s": "Inter",
        h2: "'DM Sans'",
        switzer: "Switzer",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      "35xl": "3.375rem",
      "13xl": "2rem",
      "24xl": "2.688rem",
      smi: "0.813rem",
      lg: "1.125rem",
      "3xl": "1.375rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "71xl": "5.625rem",
      "8xl": "1.688rem",
      "26xl": "2.813rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
