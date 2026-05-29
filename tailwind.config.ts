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
        deep: "#0B0B0F",
        surface: "#1A1A1E",
        warm: "#F5F0E8",
        cream: "#F2EDE4",
        muted: "#A89F8F",
        gold: "#C9A84C",
        sage: "#7A8B6F",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading": ["2rem", { lineHeight: "1.2" }],
        "subheading": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body": ["1.125rem", { lineHeight: "1.7" }],
        "body-sm": ["1rem", { lineHeight: "1.6" }],
      },
      animation: {
        "ken-burns": "ken-burns 25s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.8s ease-out both",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        "fade-in": {
          "0%": { opacity: "0.3", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
