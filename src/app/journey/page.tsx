"use client";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Timeline from "../components/Timeline";
import ContentWrapper from "../containers/ContentWrapper";

const JourneyPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body text-center max-w-lg mx-auto mb-4 py-4'>
					<Heading element='h1' classes='text-center mb-2'>
						My Journey
					</Heading>
					<p className='text-sm text-brand-sub'>
						I have been programming full time ever since 2022 and I will be
						programming long into the future. Here is my journey.
					</p>
				</section>
				<section className='text-brand-body'>
					<Timeline />
				</section>
			</ContentWrapper>
		</>
	);
};

export default JourneyPage;
