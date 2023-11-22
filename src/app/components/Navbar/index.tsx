import Image from "next/image";
import AlakaslamLogo from "../../../../public/images/icon.png";
import Link from "next/link";

const Navbar = () => {
	const navLinksStyle = "font-bold cursor-pointer no-underline";

	return (
		<nav className='text-brand-body flex justify-between w-full max-w-6xl mx-2 sm:mx-8 md:mx-20'>
			<Link href='/'>
				<div className='flex justify-between items-center'>
					<Image
						src={AlakaslamLogo}
						alt='Alakaslam logo'
						width={48}
						height={48}
					/>
					<p className='font-bold m-0 ml-2'>Robbie Gollan</p>
				</div>
			</Link>
			<div className='w-1/2 flex justify-between items-center max-w-sm'>
				<ul className=' list-none flex w-full justify-between items-center'>
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
