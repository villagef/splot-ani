import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "rgb(176,88,101)",
					background: "rgb(255,250,250)",
					foreground: "rgba(255,255,255, 0.5)",
					textLight: "rgb(244,247,251)",
					textDark: "rgb(30,41,59)",
					categoryOne: "rgb(216,167,177)",
					categoryTwo: "rgb(182,226,211)",
					categoryThree: "rgb(255,163,132)",
				},
				secondary: {
					DEFAULT: "rgb(34,46,89)",
					background: "rgb(236,235,233)",
					foreground: "rgb(255,255,255)",
					textLight: "rgb(244,247,251)",
					textDark: "rgb(30,41,59)",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
