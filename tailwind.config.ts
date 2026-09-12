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
        page: {
          light: "#F7F5F0",
          dark: "#0B2340",
          cardDark: "#132B46",
          cardDarkBorder: "rgba(255, 255, 255, 0.08)",
        },

        royal: {
          blue: "#0075be",
          deepNavy: "#0B2340",
          sky: "#EAF5FC",
          navy: "#071827",
          ivory: "#F7F5F0",
          white: "#FFFFFF",
          dark: "#17212B",
          muted: "#66717C",
        },

        brand: {
          dark: "#17212B",
          muted: "#66717C",
          cream: "#F7F5F0",
          accent: "#0075be",
          primary: "#0075be",
          deepNavy: "#0B2340",
          action: "#0075be",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        card: "14px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
