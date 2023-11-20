"use client";

import CustomisedTimeline from "../components/CustomisedTimeline";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const ExperiencePage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body text-center max-w-lg mx-auto mb-4'>
					<h1 className='text-center font-bold text-3xl text-brand-heading mb-2'>
						My Journey
					</h1>
					<p className='text-sm text-brand-sub'>
						I have been programming full time ever since 2022 and I will be
						programming long into the future. Here is my journey.
					</p>
				</section>
				<section className='text-brand-body'>
					<CustomisedTimeline />
				</section>
			</ContentWrapper>
		</>
	);
};

export default ExperiencePage;
