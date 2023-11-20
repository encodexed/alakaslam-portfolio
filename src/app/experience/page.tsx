"use client";

import CustomisedTimeline from "../components/CustomisedTimeline";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const ExperiencePage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body'>
					<CustomisedTimeline />
				</section>
			</ContentWrapper>
		</>
	);
};

export default ExperiencePage;
