module.exports = {
  mode: "jit",
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
          jumia: {
            light: "#232F3E",
            bg_sm_header: "#f5f5f5",
            main_bg: "#f34423"
          },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
