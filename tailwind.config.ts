import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "white", // Medium Gray
        secondary: "#555", // Dark Gray
        accent: "#333", // Darker Gray
        shadow: "#101010", //
        background: "#black", // Dark Gray
        textSecondary: "#ddd", // Light Gray
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
