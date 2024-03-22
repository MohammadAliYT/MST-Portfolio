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
      moldyen: ["Moldyen", "roman"],
      OggRoman: ["OggRoman", "serif"],
      ogg: ["ogg-roman", "roman"],
      TitilliumWebExtralight: ["TitilliumWebExtralight", "roman"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        loopTextLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shake: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25% ": { transform: "translateX(-5px) translateY(1px)" },
          "50% ": { transform: "translateX(5px) translateY(-1px)" },
          "75% ": { transform: "translateX(-3px) translateY(1px)" },
          "100%": { transform: "translateX(3px) translateY(-1px)" },
        },
      },
      animation: {
        loopL: "loopTextLeft  4s linear infinite",
        shake: "shake 0.5s ease-in-out infinite",
      },
      colors: {
        orange: "#ed7c50",
        darkOrange: "#d96d43",
        darkGrey: "#595959",
        lightGrey: "#8a8a8a",
        green: "#43ae61",
        purple: "#8566f6",
        turks: "#a6e2e3",
        red: "#e46060",
        black: "#282829",
        white: "#f5f4f5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
