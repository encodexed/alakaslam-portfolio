import { ProjectsData } from "@/app/projects/page";

const UnfeaturedProjects = ({ projects }: { projects: ProjectsData[] }) => {
	return (
		<>
			{projects.map((project) => {
				return <article key={project.id}>{project.title}</article>;
			})}
		</>
	);
};

export default UnfeaturedProjects;
