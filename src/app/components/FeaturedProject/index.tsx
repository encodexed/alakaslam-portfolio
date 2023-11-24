import { ProjectsData } from "@/app/projects/page";
import Image from "next/image";
import DynamicSkillIcon from "../DynamicSkillIcon";
import { RocketLaunch, Source } from "@mui/icons-material";
import Link from "next/link";
import Heading from "../Heading";

const FeaturedProject = ({ project }: { project: ProjectsData }) => {
	const { id, techStack, title, subtitle, imageLinks, githubLink, liveLink } =
		project;

	return (
		<article className='flex flex-col-reverse sm:justify-between sm:flex-row mb-12 gap-4 p-5 border-2 bg-brand-card border-transparent hover:border-white transition-all text-center sm:text-left'>
			<div className='flex flex-col justify-between gap-4'>
				<div>
					<Heading element='h2' classes='text-palette-mint'>
						{title}
					</Heading>
					<p className='text-brand-sub'>{subtitle}</p>
					<div className='mt-2 flex gap-2 justify-center sm:justify-start'>
						<Link
							className='text-white text-sm'
							href={githubLink}
							target='_blank'
						>
							<Source
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className='text-palette-mint font-bold'>Github</span>
						</Link>
						{liveLink && (
							<Link className='text-sm' href={liveLink} target='_blank'>
								<RocketLaunch
									fontSize='small'
									sx={{ position: "relative", top: "-2px" }}
								/>{" "}
								<span className='text-palette-mint font-bold'>Live Site</span>
							</Link>
						)}
					</div>
				</div>
				<div className='flex gap-2 flex-wrap justify-center sm:justify-start'>
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
			</div>
			<div className='h-60 w-60 min-h-[240px] min-w-[240px] max-h-[240px] max-w-[240px] m-auto sm:m-0'>
				<Image
					className='w-full h-full relative object-cover object-center'
					src={imageLinks[0] || "/images/placeholder-image.jpeg"}
					alt={`A picture of the ${title} project`}
					width={500}
					height={500}
				/>
			</div>
		</article>
	);
};

export default FeaturedProject;
