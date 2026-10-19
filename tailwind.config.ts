import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "var(--bg-deep, #020409)",
          dark: "var(--bg-dark, #060c18)",
          card: "var(--bg-card, rgba(255, 255, 255, 0.04))",
        },
        accent: {
          DEFAULT: "var(--accent, #6c63ff)",
          cyan: "var(--accent2, #00d4ff)",
          pink: "var(--accent3, #ff6b9d)",
          gold: "var(--gold, #f5c842)",
          mint: "var(--neon-green, #2dffb3)",
        },
        foreground: {
          DEFAULT: "var(--text, #e8eaf6)",
          muted: "var(--text-muted, rgba(232, 234, 246, 0.45))",
        },
        border: "var(--border, rgba(108, 99, 255, 0.18))",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(108, 99, 255, 0.25)",
        "glow-cyan": "0 0 60px rgba(0, 212, 255, 0.25)",
        "glow-btn": "0 0 30px rgba(108, 99, 255, 0.4)",
        "card-hover": "0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(108, 99, 255, 0.5)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        lineDown: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        orbFloat: {
          from: { transform: "translate(0, 0) scale(1)" },
          to: { transform: "translate(30px, 40px) scale(1.08)" },
        },
        flowGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-line": "lineDown 1.8s ease-in-out infinite",
        "orb-float": "orbFloat 12s ease-in-out infinite alternate",
        "gradient-flow": "flowGradient 6s ease infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
