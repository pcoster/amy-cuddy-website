import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "background-alt": "#F8F8F6",
        "text-primary": "#0D0D0D",
        "text-secondary": "#6B6B6B",
        navy: {
          DEFAULT: "#1B3A6B",
          dark: "#122850",
          light: "#254d8e",
        },
        gold: {
          DEFAULT: "#C9A84C",
          dark: "#a8882e",
          light: "#dfc06e",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        "prose-xl": "72ch",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
