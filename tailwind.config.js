/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true,
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "SUIT Variable",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        light: "#e6e6e6",
        light_point: "#1A1A1A",
        dark: "#0D0D0D",
        dark_point: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
