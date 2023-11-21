import Link from "next/link";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const ProjectsPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<div className='text-brand-body'>
					This page is coming soon. Some of my projects are already outlined in
					my{" "}
					<Link href='/' className='underline'>
						Journey page
					</Link>
					.
				</div>
			</ContentWrapper>
		</>
	);
};

export default ProjectsPage;
