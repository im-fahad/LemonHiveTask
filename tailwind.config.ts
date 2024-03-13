import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Inter: ['Inter', 'sans-serif']
      },
      colors:{
        primary:'#111D5E',
        secondary:'#FFC93E',
        blue:'#2563EB',
        grayDark:'#617187',
        gray:'#CDCDCD',
        grayLight:'#F9FAFB'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
