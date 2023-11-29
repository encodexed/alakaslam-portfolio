import Image from "next/image";
import AlakaslamLogo from "../../../../public/images/icon.png";
import Link from "next/link";
import NavDropdown from "../NavDropdown";
import Heading from "../Heading";

const Navbar = () => {
	const navLinksStyle = "font-bold cursor-pointer no-underline hover:underline";

	return (
		<nav className='text-brand-body flex justify-between w-full max-w-6xl mx-2 sm:mx-8 md:mx-20 flex-grow sm:flex-auto'>
			<Link href='/'>
				<div className='flex justify-between items-center'>
					<Image
						src={AlakaslamLogo}
						alt='Alakaslam logo'
						width={48}
						height={48}
					/>
					{/* <p className='font-bold m-0 ml-2 hover:underline'>Robbie Gollan</p> */}
					<Heading element='h4' classes='text-white hover:underline'>
						Robbie Gollan
					</Heading>
				</div>
			</Link>
			<div className='w-fit sm:w-1/2 justify-between items-center max-w-sm flex'>
				<NavDropdown />
				<ul className='list-none w-full justify-between items-center hidden sm:flex'>
					<li>
						<Link className={navLinksStyle} href='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className={navLinksStyle} href='/projects'>
							Projects
						</Link>
					</li>
					<li>
						<Link className={navLinksStyle} href='/journey'>
							Journey
						</Link>
					</li>
					<li>
						<Link className={navLinksStyle} href='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
