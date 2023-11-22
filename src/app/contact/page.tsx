import Link from "next/link";
import Header from "../components/Header";
import ContentWrapper from "../containers/ContentWrapper";

const ContactPage = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<p className='text-xs text-brand-accent text-center'>
					Site still being built but deployed to give preliminary details of
					myself and my work. (22nd November, 2023)
				</p>
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
