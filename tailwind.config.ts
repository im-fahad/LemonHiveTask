import type {Config} from "tailwindcss";

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
            fontFamily: {
                Inter: ['Inter', 'sans-serif']
            },
            colors: {
                primary: '#111D5E',
                secondary: '#FFC93E',
                blue: '#2563EB',
                grayDark: '#617187',
                gray: '#CDCDCD',
                grayLight: '#F9FAFB'
            },
            container: {
                center: true,
            },
            boxShadow: {
                one: '0px 4px 8px 0px #0000000F'
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1680px',
            '4xl': '1780px',
        }
    },
    plugins: [],
};
export default config;
