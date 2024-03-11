import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bebasBold: ["Bebas Neue", "sans-serif"],
      bebasRegular: ["Bebas Neue Regular", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
