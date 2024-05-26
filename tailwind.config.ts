import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],

  theme: {
    extend: {
      colors: {
        main: " rgb(79 70 229  );",
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
