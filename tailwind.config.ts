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
        // Display alias kept under the `serif` key so existing classes keep working.
        // Renders as a tight neo-grotesque now, not an actual serif.
        serif: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#ffffff",
          soft: "#f4f4f4",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#3a3a3a",
          muted: "#7a7a7a",
        },
        rule: "#e5e5e5",
      },
      letterSpacing: {
        eyebrow: "0.14em",
        label: "0.18em",
      },
    },
  },
  plugins: [],
} satisfies Config;
