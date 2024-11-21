import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "magic-primary": "#43B692", // 翡翠绿
        "magic-secondary": "#3F88C5", // 极光蓝
        "text-primary": "#2c3e50", // 主文本
        "text-secondary": "#34495e", // 次要文本
        "background-start": "#ffffff", // 背景起始色
        "background-end": "#e8f5e9", // 背景结束色
      },
      keyframes: {
        "aurora-flow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "aurora-flow": "aurora-flow 15s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;