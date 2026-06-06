import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          bg:      "#04050D",
          "bg-2":  "#080B1E",
          text:    "#E8ECFF",
          muted:   "#7D8DB8",
          primary: "#7C6FF5",
          "primary-lt": "#A5A0F8",
          cyan:    "#22D3EE",
          green:   "#4ADE80",
          pink:    "#F472B6",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "waveform-bar": {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%":       { transform: "scaleY(1)" },
        },
        "drift-orb": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%":       { transform: "translate(40px, -30px) scale(1.05)" },
          "66%":       { transform: "translate(-30px, 20px) scale(0.95)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":       { opacity: "0.9", transform: "scale(1.1)" },
        },
        "line-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%":       { opacity: "0.9" },
        },
      },
      animation: {
        float:           "float 4s ease-in-out infinite",
        "float-slow":    "float 6s ease-in-out infinite",
        "float-medium":  "float 5s ease-in-out infinite",
        marquee:         "marquee 36s linear infinite",
        "waveform-bar":  "waveform-bar 1.2s ease-in-out infinite",
        "drift-orb":     "drift-orb 18s ease-in-out infinite",
        "pulse-glow":    "pulse-glow 3s ease-in-out infinite",
        "line-pulse":    "line-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
