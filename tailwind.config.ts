import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15141C",
          soft: "#211F2B",
          line: "#3A3745",
        },
        paper: {
          DEFAULT: "#E9E4D8",
          dim: "#DAD5C6",
        },
        brass: {
          DEFAULT: "#C9962F",
          soft: "#E4B65A",
          deep: "#9C7220",
        },
        cloud: {
          DEFAULT: "#F3F1EA",
          muted: "#A29FB0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        easel: "0 40px 80px -30px rgba(0,0,0,0.55)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
