import { ProjectsData } from "@/app/projects/page";
import FeaturedProject from "../FeaturedProject";

const FeaturedProjects = ({ projects }: { projects: ProjectsData[] }) => {
	return (
		<>
			{projects.map((project) => {
				return <FeaturedProject project={project} key={project.id} />;
			})}
		</>
	);
};

export default FeaturedProjects;
