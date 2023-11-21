import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
	height: number; //px
	width: number; //px
	shadow: boolean | undefined;
}

const CircleImage = ({ src, alt, height, width, shadow }: Props) => {
	const classes = shadow ? "shadow" : "";
	return (
		<Image
			className={classes}
			style={{ borderRadius: "100%" }}
			src={src}
			alt={alt}
			height={height}
			width={width}
		/>
	);
};

export default CircleImage;
