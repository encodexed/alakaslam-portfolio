import { ThemeConfig } from "tailwindcss/types/config";

const themeConfig: Partial<ThemeConfig> = {
	extend: {
		screens: {
			xxxs: "320px",
			xxs: "375px",
			xs: "425px",
		},
		colors: {
			brand: {
				card: "#1c202d",
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
			palette: {
				offwhite: "#edf2f4",
				pink: "#fb3298",
				mint: "#4ee5b6",
				yellow: "#fbca00",
				blue: "#01a2e9",
				background: "#151721",
			},
		},
	},
};

export default themeConfig;
