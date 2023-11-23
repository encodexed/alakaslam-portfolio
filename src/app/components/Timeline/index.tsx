import TimelineEvent from "../TimelineEvent";
import TimelineData from "../../../../public/data/timeline-events.json";

export interface EventData {
	id: number;
	date: string;
	title: string;
	body: string;
	github?: string;
	live?: string;
}

const Timeline = () => {
	return (
		<>
			{TimelineData.timeline.map((event) => {
				return <TimelineEvent key={event.id} data={event} />;
			})}
		</>
	);
};

export default Timeline;
