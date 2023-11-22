"use client";

import CustomisedTimeline from "../components/CustomisedTimeline";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const JourneyPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body text-center max-w-lg mx-auto mb-4 py-4'>
					<p className='text-xs text-brand-accent text-center'>
						Site still being built but deployed to give preliminary details of
						myself and my work. Best accessed on a computer/tablet. Small
						screens not fully supported. (23rd November, 2023)
					</p>
					<h1 className='text-center font-bold text-5xl text-brand-heading mb-2'>
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

export default JourneyPage;
