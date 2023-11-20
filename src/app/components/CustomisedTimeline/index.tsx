import Timeline from "@mui/lab/Timeline";
import TimelineEvents from "../../../../public/data/timeline-events.json";
import TimelineDataItem from "../TimelineDataItem";
import {
	TimelineConnector,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";

export interface EventData {
	id: number;
	date: string;
	title: string;
	body: string;
	dotType: string;
	link?: string;
}

const CustomisedTimeline = () => {
	return (
		<Timeline position='right' sx={{ color: "white" }}>
			{TimelineEvents.data.map((event) => {
				return <TimelineDataItem key={event.id} data={event} />;
			})}
		</Timeline>
	);
};

export default CustomisedTimeline;
