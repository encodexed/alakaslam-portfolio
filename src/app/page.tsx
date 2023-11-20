"use client";

import Header from "./components/Header";
import ContentWrapper from "./containers/ContentWrapper";
import RobsAndPip from "../../public/images/robs-n-pip-square.png";
import CircleImage from "./components/CircleImage";

const page = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<main>
					<section className='flex-col justify-around py-2'>
						<div className='flex flex-col items-center'>
							<CircleImage
								src={RobsAndPip}
								alt='Just Robbie and Pippin'
								height={240}
								width={240}
								shadow={true}
							/>
							<h1 className='text-center font-bold text-3xl text-brand-heading'>
								Hey, I&apos;m Robbie
							</h1>
							<p className='text-brand-lightBackground'>
								...and that little cutie is Pippin
							</p>
						</div>

						<div className='flex flex-col items-center gap-4 text-center text-sm text-brand-body'>
							<p>
								I was a private music educator, with a passion for writing my
								own music and playing the piano. I grew up playing many
								instruments and decided that would be the path my life takes.
							</p>

							<p>That was before I discovered programming.</p>
							<p>
								I fell instantly in love with JavaScript and have been learning
								a variety of different technologies for the web ever since 2022.
								I love how creative I can be with code and the remarkable places
								it can take us.{" "}
							</p>
							<p>
								When I&apos;m not coding, I like to play games on my computer,
								play with my birds or have a hit of tennis.
							</p>
						</div>
					</section>
					<section></section>
				</main>
			</ContentWrapper>
		</>
	);
};

export default page;
