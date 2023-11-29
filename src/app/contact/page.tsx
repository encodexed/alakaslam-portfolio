"use client";

import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import ContactsLinkList from "../components/ContactsLinkList";

const ContactPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<section className='text-center max-w-lg mx-auto mb-4 py-4'>
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
						<ContactsLinkList />
					</div>
				</section>
			</ContentWrapper>
		</>
	);
};

export default ContactPage;
