const ContentWrapper = ({ children }: any) => {
	return (
		<main className='flex justify-center'>
			<div className='mt-16 max-w-6xl mx-4 sm:mx-8 md:mx-20'>{children}</div>
		</main>
	);
};

export default ContentWrapper;
