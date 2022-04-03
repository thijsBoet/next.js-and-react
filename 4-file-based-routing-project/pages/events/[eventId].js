import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';

const EventDetail = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);
	const { title, date, location, image, description } = event;

	if (!eventId) {
		return <p>No event found!</p>;
	}

	return (
		<>
			<EventSummary title={title} />
			<EventLogistics
				date={date}
				address={location}
				image={image}
				imageAlt={title}
			/>
			<EventContent>
				<p>{description}</p>
			</EventContent>
		</>
	);
};

export default EventDetail;
