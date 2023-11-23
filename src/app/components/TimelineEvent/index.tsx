import { EventData } from "../Timeline";
import Link from "next/link";
import { RocketLaunch, Source } from "@mui/icons-material";

const TimelineEvent = ({ data }: { data: EventData }) => {
	const { id, date, title, body, github, live } = data;

	const colorId = id % 8;
	const baseClass = "spectrum-";
	const colorClass = baseClass + colorId;

	return (
		<div id='timelineEvent' className='flex'>
			<div
				className={`pr-4 pt-1 border-r border-${colorClass} text-sm min-w-[80px]`}
			>
				{date}
			</div>
			<div className='pl-4 mb-8'>
				<h2 className={`text-lg font-bold text-${colorClass}`}>{title}</h2>
				<p className='text-brand-body text-sm mb-2'>{body}</p>
				<div className='flex items-center justify-start gap-2'>
					{github && (
						<Link className='text-white text-sm' href={github} target='_blank'>
							<Source
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className={`text-${colorClass} font-bold`}>Github</span>
						</Link>
					)}
					{live && (
						<Link className='text-sm' href={live} target='_blank'>
							<RocketLaunch
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className={`text-${colorClass} font-bold`}>Live Site</span>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default TimelineEvent;

// * Don't delete this comment :)
// className = 'text-spectrum-0 text-spectrum-1 text-spectrum-2 text-spectrum-3 text-spectrum-4 text-spectrum-5 text-spectrum-6 text-spectrum-7 border-spectrum-0 border-spectrum-1 border-spectrum-2 border-spectrum-3 border-spectrum-4 border-spectrum-5 border-spectrum-6 border-spectrum-7' ;
