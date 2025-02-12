import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        B300: "#666666",
        B400: "#333333",
        B50: "#E6E6E6",
        B200: "#999999",
      },
      backgroundImage: {
      }
    },
  },
  plugins: [],
} satisfies Config;
