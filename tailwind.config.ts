import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        serif: ["'Instrument Serif'", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#f6f4ef",
          soft: "#efece4",
        },
        ink: {
          DEFAULT: "#14161a",
          soft: "#3b3f46",
          muted: "#7a7971",
        },
        rule: "#d9d4c6",
      },
      letterSpacing: {
        eyebrow: "0.14em",
        label: "0.18em",
      },
    },
  },
  plugins: [],
} satisfies Config;
