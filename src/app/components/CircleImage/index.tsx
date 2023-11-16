import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
	height: number; //px
	width: number; //px
	shadow: boolean | undefined;
}

const CircleImage = ({ src, alt, height, width, shadow }: Props) => {
	const classes = shadow ? "rounded-full shadow" : "rounded-full";
	return (
		<Image
			className={classes}
			src={src}
			alt={alt}
			height={height}
			width={width}
		/>
	);
};

export default CircleImage;
