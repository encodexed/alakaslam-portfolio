import Navbar from "../Navbar";

const Header = () => {
	return (
		<header className='flex justify-center items-center h-16 w-full fixed top-0 bg-transparent shadow backdrop-blur z-50'>
			<Navbar />
		</header>
	);
};

export default Header;
