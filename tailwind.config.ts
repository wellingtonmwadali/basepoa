import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f2",
          100: "#e0ece0",
          200: "#c3dac4",
          300: "#96bf98",
          400: "#619f65",
          500: "#3d7f42",
          600: "#2d6332",
          700: "#264f2a",
          800: "#214024",
          900: "#1c3620",
          950: "#0e1f11",
        },
        cream: {
          50: "#fdfdf5",
          100: "#f8f6e8",
          200: "#f2edd3",
          300: "#e8e0b5",
          400: "#d9ce8e",
          500: "#c9b96b",
        },
        earth: {
          100: "#f5ede0",
          200: "#e8d5b7",
          300: "#d4b896",
          400: "#b8916a",
          500: "#9a7045",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        "leaf-sway": "leafSway 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        leafSway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
