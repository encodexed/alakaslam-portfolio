// TODO: Tailwind may not compile the 'classes' prop, investigate other ways to create consistent styles
import { Roboto_Slab } from "next/font/google";
type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
});

const Heading = ({
	children,
	element,
	classes,
}: {
	children: any;
	element: HeadingType;
	classes?: string;
}) => {
	switch (element) {
		case "h1":
			return (
				<h1
					className={`${robotoSlab.className} text-palette-blue text-5xl font-bold ${classes}`}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={`${robotoSlab.className} text-palette-blue text-3xl font-bold ${classes}`}
				>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3
					className={`${robotoSlab.className} text-palette-blue text-2xl font-bold ${classes}`}
				>
					{children}
				</h3>
			);
		case "h4":
			return (
				<h4
					className={`${robotoSlab.className} text-palette-blue text-xl font-bold ${classes}`}
				>
					{children}
				</h4>
			);
		case "h5":
			return (
				<h5
					className={`${robotoSlab.className} text-palette-blue text-lg font-bold ${classes}`}
				>
					{children}
				</h5>
			);
		case "h6":
			return (
				<h6
					className={`${robotoSlab.className} text-palette-blue text-lg font-semibold ${classes}`}
				>
					{children}
				</h6>
			);
	}
};

export default Heading;

// className='text-spectrum-0 text-spectrum-1 text-spectrum-2 text-spectrum-3 text-spectrum-4 text-spectrum-5 text-spectrum-6 text-spectrum-7'
