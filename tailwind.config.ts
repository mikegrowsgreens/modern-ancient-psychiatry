import type { Config } from "tailwindcss";

/**
 * Thin bridge over the CSS custom properties in src/app/globals.css, which is
 * the single source of truth. See DESIGN.md.
 *
 * The `rgb(var(--x) / <alpha-value>)` shape is what keeps the codebase's ~60
 * alpha modifiers (bg-gold/10, text-cream/85, border-gold/20) working. Putting
 * a hex in the var instead flattens all of them to full opacity silently.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: "rgb(var(--c-deep) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        cream: "rgb(var(--c-cream) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        gold: "rgb(var(--c-gold) / <alpha-value>)",
        "gold-deep": "rgb(var(--c-gold-deep) / <alpha-value>)",
        alert: "rgb(var(--c-alert) / <alpha-value>)",
        // `warm` and `sage` deleted — never used and used-exactly-once.
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // DESIGN.md §5. Fluid where it needs to survive 375 -> 1440.
        monument: ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        display: ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        verse: ["clamp(1.5rem, 2.6vw, 2.125rem)", { lineHeight: "1.35" }],
        heading: ["2rem", { lineHeight: "1.2" }],
        subheading: ["1.5rem", { lineHeight: "1.3" }],
        title: ["1.375rem", { lineHeight: "1.3" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-sm": ["1rem", { lineHeight: "1.6" }],
        label: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
        fine: ["0.8125rem", { lineHeight: "1.55" }],
      },
      maxWidth: {
        // Four measures, chosen by content role. DESIGN.md §6.
        prose: "34rem",
        display: "46rem",
        index: "68rem",
      },
      spacing: {
        header: "var(--header-h)",
        // Section rhythm assigned by content weight, not one value everywhere.
        "rhythm-hairline": "2.5rem",
        "rhythm-close": "4.5rem",
        "rhythm-default": "7rem",
        "rhythm-open": "11rem",
      },
      height: {
        header: "var(--header-h)",
      },
      transitionDuration: {
        micro: "var(--motion-micro)",
        standard: "var(--motion-standard)",
        modal: "var(--motion-modal)",
        page: "var(--motion-page)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        inout: "var(--ease-inout)",
      },
      animation: {
        // The single orchestrated entrance (home hero). ken-burns deleted:
        // 25s of constant ambient motion is what a dysregulated reader's
        // peripheral vision keeps catching.
        enter: "enter 420ms var(--ease-out) both",
      },
      keyframes: {
        enter: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
