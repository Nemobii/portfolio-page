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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-image": "url('/portfolio-page/images/Lense.jpg')"
      },
      animation: {
        'scale-in': 'scaleIn 30s ease forwards 0.5s',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(2)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
