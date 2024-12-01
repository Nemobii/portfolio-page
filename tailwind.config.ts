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
        "white": "#FFFFFF",
        "grey": {
          "light": "#ACA8A8",
          "dark": "#616161"
        },
        "black": "#292929",
      },
      backgroundImage: {
        "hero-image": "url('/portfolio-page/images/Lense.jpg')",
        "home": "url(/portfolio-page/images/DSC_7190.jpg)",
        "parallax": "url(/portfolio-page/images/Parallax.jpg)",
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
      fontFamily: {
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
        'dancing-script': ['DancingScript', 'Arial', 'sans-serif'],
        'raleway': ['Raleway', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
