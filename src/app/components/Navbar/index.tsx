import Image from "next/image";
import AlakaslamLogo from "../../../../public/images/icon.png";
import Link from "next/link";

const Navbar = () => {
	const navLinksStyle = "text-white font-bold cursor-pointer no-underline";

	return (
		<nav className='flex justify-between w-full max-w-6xl mx-20'>
			<Link href='/'>
				<div className='flex justify-between items-center'>
					<Image
						src={AlakaslamLogo}
						alt='Alakaslam logo'
						width={36}
						height={36}
					/>
					<p className='text-white font-bold m-0 ml-2'>Robbie Gollan</p>
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
						<Link className={navLinksStyle} href='/experience'>
							Experience
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