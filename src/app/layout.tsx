import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Robbie Gollan | Developer",
	description:
		"Junior Software Developer and programming enthusiast, I love building new ideas from the ground up.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.className} bg-palette-background text-palette-offwhite`}
			>
				{children}
			</body>
		</html>
	);
}
