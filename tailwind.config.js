function color(variable) {
  return function ({ opacityVariable, opacityValue }) {
    if (opacityValue !== undefined) {
      return `rgba(${variable}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(${variable}, var(${opacityVariable}, 1))`;
    }
    return `rgb(${variable})`;
  };
}

module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: color("var(--green)"),
      },
      ringColor: {
        DEFAULT: color("var(--red)"),
      },
      ringOpacity: {
        DEFAULT: 1,
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
