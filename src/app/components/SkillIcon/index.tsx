import Image, { StaticImageData } from "next/image";

const SkillIcon = ({
	src,
	alt,
	text,
}: {
	src: StaticImageData;
	alt: string;
	text: string;
}) => {
	return (
		<div className='flex gap-2'>
			<Image src={src} alt={alt} height={24} />
			<p className='font-bold'>{text}</p>
		</div>
	);
};

export default SkillIcon;
