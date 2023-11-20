import {
	TimelineItem,
	TimelineSeparator,
	TimelineOppositeContent,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
} from "@mui/lab";
import { EventData } from "../CustomisedTimeline";
import Link from "next/link";
import { FileOpen, OpenInNew, RocketLaunch, Source } from "@mui/icons-material";

const TimelineDataItem = ({ data }: { data: EventData }) => {
	const { id, date, title, body, github, live, dotType } = data;

	const colorClass = "text-spectrum-" + (id % 8);
	const linkClass = colorClass + " underline";

	return (
		<TimelineItem>
			<TimelineOppositeContent sx={{ m: "4px 0" }}>
				<p className={`${colorClass} + text-sm`}>{date}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				{dotType === "filled" && <TimelineDot />}
				{dotType === "outlined" && <TimelineDot variant='outlined' />}
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 className={`${colorClass} + text-lg font-bold`}>{title}</h3>
				<p className='text-brand-body text-sm mb-2'>{body}</p>
				<div className='flex items-center justify-start gap-2'>
					{github && (
						<Link className='text-white text-sm' href={github}>
							<Source
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className={linkClass}>Github</span>
						</Link>
					)}
					{live && (
						<Link className='text-sm' href={live}>
							<RocketLaunch
								fontSize='small'
								sx={{ position: "relative", top: "-2px" }}
							/>{" "}
							<span className={linkClass}>Live Site</span>
						</Link>
					)}
				</div>
			</TimelineContent>
		</TimelineItem>
	);
};

export default TimelineDataItem;

// Don't delete this comment :)
// className = 'text-spectrum-0 text-spectrum-1 text-spectrum-2 text-spectrum-3 text-spectrum-4 text-spectrum-5 text-spectrum-6 text-spectrum-7';
