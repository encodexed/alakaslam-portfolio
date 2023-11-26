"use client";

import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { GitHub, LinkedIn, SportsEsports, Telegram } from "@mui/icons-material";

const ContactPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-brand-body text-center max-w-lg mx-auto mb-4 py-4'>
					<Heading element='h1' classes='text-center mb-2'>
						Contact Me
					</Heading>
					<p className='text-sm text-brand-sub'>
						Fill out the form below to send me an email, or connect with me
						through any of the following channels. I love meeting new people so
						don&apos;t hesitate!
					</p>
					<div className='flex justify-center'>
						<ContactForm />
					</div>
					<div className='flex justify-center mt-4'>
						<ul className='flex flex-wrap sm:flex-col gap-2 justify-center'>
							<li className='text-spectrum-2'>
								<Link href='https://github.com/encodexed'>
									<span className='text-white'>
										<GitHub />
									</span>{" "}
									encodexed
								</Link>
							</li>
							<li className='text-spectrum-4'>
								<Link href='https://www.linkedin.com/in/robbie-gollan-b05684261/'>
									<span className='text-white'>
										<LinkedIn />
									</span>{" "}
									Robbie Gollan
								</Link>
							</li>
							<li className='text-spectrum-6'>
								<Link href='https://steamcommunity.com/id/alakaslam'>
									<span className='text-white'>
										<SportsEsports />
									</span>{" "}
									alakaslam (Steam)
								</Link>
							</li>
							<li className='text-spectrum-1'>
								<Link href='https://discordapp.com/users/352214108663447552'>
									<span className='text-white'>
										<Telegram />
									</span>{" "}
									alakaslam (Discord)
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</ContentWrapper>
		</>
	);
};

export default ContactPage;
