import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["html", "body", "*, *::before, *::after"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        linearGridDark:
          "linear-gradient(180deg, #051923 0%, rgba(5, 25, 35, 0) 100%)",
        linearGridBlue: " linear-gradient(180deg, #00A6FB 0%, #051923 100%)",
        NotFound:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,71,9,1) 35%, rgba(67,134,119,1) 64%, rgba(58,145,138,1) 69%, rgba(54,149,146,1) 71%, rgba(208,15,225,1) 92%, rgba(0,212,255,1) 100%)",
        // "linear-gradient(90deg, rgba(207,67,45,1) 0%, rgba(199,45,196,1) 64%, rgba(62,139,202,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hovereffect:
          "radial-gradient(circle, rgba(0,166,251,1) 0%, rgba(0,53,84,1) 100%)",
      },
      fontFamily: {
        poppin: ["var(--poppin)"],
      },
    },
    colors: {
      navbarBlue: "#00A6FB",
      dark: "#051923",
      lightWhite: "#D9D9D9",
      light: "#FFFFFF",
      footerdown: "#5B727E",
      contactBlue: " #0582CA",
      shadow: "#dadada",
      innershadow: "#949292",
    },
  },
  plugins: [],
};
export default config;
function theme(arg0: string) {
  throw new Error("Function not implemented.");
}
