"use client";

import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";
import Projects from "../../../public/data/projects-info.json";
import { useEffect, useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import UnfeaturedProjects from "../components/UnfeaturedProjects";

export interface ProjectsData {
	id: number;
	title: string;
	subtitle: string;
	techStack: SkillData[];
	isFeature: boolean;
	dateStarted: string;
	dateFinished: string;
	description: string;
	imageLinks: string[];
	projectType: string;
	githubLink: string;
	liveLink?: string;
}

export interface SkillData {
	label: string;
	icon: string;
}

const ProjectsPage = () => {
	const [featuredProjects, setFeaturedProjects] = useState<ProjectsData[]>([]);
	const [unfeaturedProjects, setUnfeaturedProjects] = useState<ProjectsData[]>(
		[]
	);

	useEffect(() => {
		const featuredArr: ProjectsData[] = [];
		const unfeaturedArr: ProjectsData[] = [];
		Projects.projects.forEach((project) => {
			project.isFeature
				? featuredArr.push(project)
				: unfeaturedArr.push(project);
		});
		setFeaturedProjects(featuredArr);
		setUnfeaturedProjects(unfeaturedArr);
	}, []);

	return (
		<>
			<Header />
			<ContentWrapper>
				<section className=' text-brand-body'>
					<h1 className='text-center text-5xl text-brand-heading font-bold py-4'>
						My Projects
					</h1>
					{/* <h2 className='text-2xl text-brand-heading mb-4 font-bold'>
						Featured Projects
					</h2> */}
					<FeaturedProjects projects={featuredProjects} />
					{/* <h2 className='text-2xl text-brand-heading mb-4 font-bold'>
						Other Projects
					</h2> */}
					<UnfeaturedProjects projects={unfeaturedProjects} />
				</section>
			</ContentWrapper>
		</>
	);
};

export default ProjectsPage;
