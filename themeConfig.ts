import { ThemeConfig } from "tailwindcss/types/config";

const themeConfig: Partial<ThemeConfig> = {
	extend: {
		colors: {
			brand: {
				body: "#edf2f4",
				heading: "#75a7ff",
				lightAccent: "#ef233c",
				accent: "#d90429",
				lightBackground: "#8d99ae",
				background: "#151721",
			},
		},
	},
};

export default themeConfig;
