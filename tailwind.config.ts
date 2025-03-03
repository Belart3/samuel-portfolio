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
        B75: "#CCCCCC",
        B200: "#999999",
      },
      backgroundImage: {
        'me': "url('./assets/images/my-image.png')",
        'ad-1': "url('./assets/images/ads/ad-1.png')",
        'ad-2': "url('./assets/images/ads/ad-2.png')",
        'ad-3': "url('./assets/images/ads/ad-3.png')",
        'ad-4': "url('./assets/images/ads/ad-4.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
