"use client";

import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";
import Projects from "../../../public/data/projects-info.json";
import { useEffect, useState } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import UnfeaturedProjects from "../components/UnfeaturedProjects";
import Heading from "../components/Heading";

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
				<section className='text-palette-offwhite'>
					<div className='text-center py-4'>
						<Heading element='h1' classes='mb-2'>
							My Projects
						</Heading>
						<p className='text-sm text-brand-sub text-center max-w-lg mx-auto'>
							My various projects, mostly solo, which I have completed over the
							years. Full details of each project can be found on the linked
							Github repositories, and some projects will be hosted for you to
							try out immediately.
						</p>
					</div>

					<FeaturedProjects projects={featuredProjects} />
				</section>
			</ContentWrapper>
		</>
	);
};

export default ProjectsPage;
