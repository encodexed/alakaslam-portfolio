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
				sub: "#d7dbdd",
			},
			spectrum: {
				1: "#ffadad",
				2: "#ffd6a5",
				3: "#fdffb6",
				4: "#caffbf",
				5: "#9bf6ff",
				6: "#a0c4ff",
				7: "#bdb2ff",
				0: "#ffc6ff",
			},
		},
	},
};

export default themeConfig;
