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
	techStack: string[];
	isFeature: boolean;
	dateStarted: string;
	dateFinished: string;
	description: string;
	imageLinks: string[];
	projectType: string;
	githubLink: string;
	status: string;
	liveLink?: string;
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
				<section className='border border-white text-brand-body'>
					<h1 className='text-5xl text-brand-heading font-bold'>My Projects</h1>
					<FeaturedProjects projects={featuredProjects} />
					<UnfeaturedProjects projects={unfeaturedProjects} />
				</section>
			</ContentWrapper>
		</>
	);
};

export default ProjectsPage;
