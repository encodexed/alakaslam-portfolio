import { ProjectsData } from "@/app/projects/page";
import Image from "next/image";
import DynamicSkillIcon from "../DynamicSkillIcon";
import { RocketLaunch, Source } from "@mui/icons-material";
import Link from "next/link";

const FeaturedProject = ({ project }: { project: ProjectsData }) => {
	const {
		id,
		techStack,
		title,
		description,
		imageLinks,
		githubLink,
		liveLink,
	} = project;

	const colorId = id % 8;
	const baseClass = "text-spectrum-";
	const colorClass = baseClass + colorId;

	return (
		<article className='flex flex-col sm:flex-row mb-12 gap-4'>
			<Image
				className='object-center object-cover w-auto'
				src={imageLinks[0] || "/images/placeholder-image.jpeg"}
				alt={`A picture of the ${title} project`}
				height={240}
				width={240}
			/>
			<div className='flex flex-col gap-4'>
				<h3 className={`${colorClass} text-3xl font-bold`}>{title}</h3>
				<div className='flex gap-2 flex-wrap'>
					{techStack.map((tech) => {
						return (
							<div
								key={`${id}-${tech.label}`}
								className='whitespace-nowrap h-6'
							>
								<DynamicSkillIcon tech={tech} />
							</div>
						);
					})}
				</div>
				<p>{description}</p>
				<div className='flex gap-2'>
					<Link
						className='text-white text-sm'
						href={githubLink}
						target='_blank'
					>
						<Source
							fontSize='small'
							sx={{ position: "relative", top: "-2px" }}
						/>{" "}
						<span className={`${colorClass} font-bold`}>Github</span>
					</Link>
					{liveLink && (
						<Link className='text-sm' href={liveLink} target='_blank'>
							<RocketLaunch
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className={`${colorClass} font-bold`}>Live Site</span>
						</Link>
					)}
				</div>
			</div>
		</article>
	);
};

export default FeaturedProject;
