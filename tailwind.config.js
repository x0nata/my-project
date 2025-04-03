/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "#f15d30",
        Black: "rgba(0, 0, 0, 0.8)",
        DarkGray: "#999999",
        Color1: "rgb(121, 115, 153)",
        Color2: "rgb(112, 105, 81)",
        Color3: "rgb(116, 135, 95)",
        Color4: "#ff5959",
        Text1: "#ffffffcc",
        bg1: "rgba(0, 0, 0, 0.05)",
      },
      dropShadow: {
        Shadow: "2px 2px 8px #f15d30", // Red shadow
      },
    },
  },
  plugins: [],
};
