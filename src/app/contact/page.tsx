import Link from "next/link";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const ContactPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<div className='text-brand-body'>
					This page is coming soon. If you&apos;d like to contact me now, check
					out some of the various other ways on the{" "}
					<Link href='/' className='underline'>
						home page
					</Link>
					.
				</div>
			</ContentWrapper>
		</>
	);
};

export default ContactPage;
