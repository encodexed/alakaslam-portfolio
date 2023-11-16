import Header from "./components/Header";
import ContentWrapper from "./containers/ContentWrapper";

const page = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<div>Home page</div>
			</ContentWrapper>
		</>
	);
};

export default page;
