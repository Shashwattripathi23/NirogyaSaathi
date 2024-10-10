const { text } = require("express");

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify where Tailwind should look for classes in your project
  theme: {
    extend: {
      colors: {
        "custom-blue-light": "#00AED5",
        "custom-blue-dark": "#016F99",
        "custom-navFont": "#F3FBFF",
        "custom-font": "#025D84",
        "custom-bg": "#1F1D1D",
        "custom-fp-fnt": "#0093BB",
        "custom-bg-light": "#009DC1",
        "custom-bg-dark": "#F3F4FF",
        "custom-im-dark": "#01628D",
        "custom-border-dark": "#C0C0C0",
        "custom-butt": "#0083AC",
        "custom-chat-light": "#F3F4FF",
        "custom-chat-dark": "#20262B",
        "custom-chat-bg": "#F3F3F3",
        "custom-border": "#007AA4",
        "custom-chat-input": "#E3FDFF",
        "custom-finder": "#0086AE",
        "custom-finder-light": "#F0FCFD",
        "custom-finder-dark": "#417FA1",
        "custom-finder-fn": "#016E98",
      },
      width: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`${num}vw`] = `${num}vw`;
          return acc;
        }, {}),
      },
      height: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`${num}rem`] = `${num}rem`;
          return acc;
        }, {}),
      },
      left: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`${num}vw`] = `${num}vw`;
          return acc;
        }, {}),
      },
      top: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`${num}rem`] = `${num}rem`;
          return acc;
        }, {}),
      },
      text: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`${num}wv`] = `${num}wv`;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
};
