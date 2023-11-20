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

const TimelineDataItem = ({ data }: { data: EventData }) => {
	const { id, date, title, body, link } = data;

	const colorClass = "text-spectrum-" + (id % 8);

	// Don't delete this comment :)
	// className = 'text-spectrum-0 text-spectrum-1 text-spectrum-2 text-spectrum-3 text-spectrum-4 text-spectrum-5 text-spectrum-6 text-spectrum-7';

	return (
		<TimelineItem sx={{ fontSize: 8, fontWeight: "bold" }}>
			<TimelineOppositeContent sx={{ m: "auto 0" }}>
				<p className={`${colorClass} + text-sm`}>{date}</p>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineConnector />
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 className={`${colorClass} + text-lg`}>{title}</h3>
				{link && (
					<Link
						className='text-brand-lightBackground text-sm underline'
						href={link}
					>
						See more...
					</Link>
				)}
				<p className='text-brand-body text-sm'>{body}</p>
			</TimelineContent>
		</TimelineItem>
	);
};

export default TimelineDataItem;
