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
		<div className='flex w-1/2 min-[600px]:w-1/3 sm:w-1/2 min-[800px]:w-1/3 mb-4'>
			<Image src={src} alt={alt} height={24} />
			<p className='ml-2 font-bold'>{text}</p>
		</div>
	);
};

export default SkillIcon;
