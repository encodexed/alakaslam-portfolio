import { ProjectsData } from "@/app/projects/page";
import Image from "next/image";

const FeaturedProject = ({ project }: { project: ProjectsData }) => {
	const { id, title, status, description, imageLinks } = project;

	const colorId = id % 8;
	const baseClass = "text-spectrum-";
	const colorClass = baseClass + colorId;

	return (
		<article className='flex mb-12 gap-4'>
			<Image
				className='object-center object-cover w-auto'
				src={imageLinks[0] || "/images/placeholder-image.jpeg"}
				alt={`A picture of the ${title} project`}
				height={240}
				width={240}
			/>
			<div className='flex flex-col gap-4'>
				<h3 className={`${colorClass} text-3xl font-bold`}>{title}</h3>
				<p>Status: {status}</p>
				<p>{description}</p>
			</div>
		</article>
	);
};

export default FeaturedProject;
