import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        english: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-tajawal)", "sans-serif"],
      },
      colors: {
        csps: {
          // Brand Crimson / Maroon (English text, book pages & star)
          maroon: "#7C1021",
          maroonDark: "#580B17",
          maroonLight: "#9E1C31",
          red: "#C5222E",

          // Brand Oceanic & Royal Navy (Arabic text, right student figure & torch)
          navy: "#0F294A",
          navyDark: "#0A1B30",
          navyLight: "#183B68",
          blue: "#1E4E8C",

          // Brand Steel / Slate Blue (Left student figure)
          steel: "#467A9A",
          steelLight: "#689AB8",
          steelBg: "#EBF3F8",
          teal: "#467A9A", // Alias for smooth backward compatibility
          tealLight: "#35627E",

          // Accents & Neutrals
          gold: "#D97706",
          goldLight: "#F59E0B",
          emerald: "#059669",
          slate: "#1E293B",
          lightBg: "#F8FAFC",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(124, 16, 33, 0.25)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
