import type { Config } from "tailwindcss";
import themeConfig from "./themeConfig";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: themeConfig,
	plugins: [],
};
export default config;
