import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('../public/images/bannerImage.png')",
        hight: "h-full",
        "custom-gradient": "linear-gradient(106.5deg, #7065f0, #a29bf5)",
      },
      colors: {
        gradientWhite: "#ffffff",
        gradientTransparent: "rgba(0, 0, 0, 0)",
        primary: "#7065f0",
        secondary: "#f1f0fe",
        "error-red": "#b50f0f",
        "bg-main-color": "#282c38",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        custom: "0 4px 40px rgba(0, 0, 0, 0.1)",
        "custom-shadow":
          "0px 0px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        "hover-shadow": "0 4px 40px rgba(0, 0, 0, .2)",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease forwards",
        slideUp: "slideUp 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
