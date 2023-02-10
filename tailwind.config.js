/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: (theme) => ({
      auto: "auto",
      // @ts-ignore
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      // @ts-ignore
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    extend: {
      colors: {
        "encre-de-chine": "var(--encre-de-chine)",
        dore: "var(--dore)",
        gris: "var(--gris)",
        "gris-transparent": "rgba(255, 255, 255, 0.8)",
        blanc: "var(--blanc)",
      },
    },
  },
  plugins: [],
};
