import { ProjectsData } from "@/app/projects/page";
import Image from "next/image";

const FeaturedProject = ({ project }: { project: ProjectsData }) => {
	const { id, title, status, description, imageLinks } = project;

	const colorId = id % 8;
	const baseClass = "text-spectrum-";
	const colorClass = baseClass + colorId;

	return (
		<article className='flex mb-4 gap-4'>
			<Image
				src={imageLinks[0] || "/images/placeholder-image.jpeg"}
				alt={`A picture of the ${title} project`}
				height={240}
				width={240}
			/>
			<div className='flex flex-col gap-4'>
				<h2 className={`${colorClass} text-3xl font-bold`}>{title}</h2>
				<p>Status: {status}</p>
				<p>{description}</p>
			</div>
		</article>
	);
};

export default FeaturedProject;
