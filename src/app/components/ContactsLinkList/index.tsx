import { GitHub, LinkedIn, SportsEsports, Telegram } from "@mui/icons-material";
import Link from "next/link";

const ContactsLinkList = () => {
	return (
		<ul className='flex flex-wrap sm:flex-col gap-2 justify-center'>
			<li>
				<Link href='https://github.com/encodexed' className='flex gap-1'>
					<GitHub />
					<span className='hover:underline text-spectrum-2'>encodexed</span>
				</Link>
			</li>
			<li>
				<Link
					href='https://www.linkedin.com/in/robbie-gollan-b05684261/'
					className='flex gap-1'
				>
					<LinkedIn />
					<span className='hover:underline text-spectrum-4'>Robbie Gollan</span>
				</Link>
			</li>
			<li>
				<Link
					href='https://steamcommunity.com/id/alakaslam'
					className='flex gap-1'
				>
					<SportsEsports />
					<span className='text-spectrum-6 hover:underline'>alakaslam</span>
				</Link>
			</li>
			<li>
				<Link
					href='https://discordapp.com/users/352214108663447552'
					className='flex gap-1'
				>
					<Telegram />
					<span className='text-spectrum-1 hover:underline'>alakaslam</span>
				</Link>
			</li>
		</ul>
	);
};

export default ContactsLinkList;
