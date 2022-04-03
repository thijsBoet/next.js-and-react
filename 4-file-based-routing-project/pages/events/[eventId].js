import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

const EventDetail = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<>
				<ErrorAlert>
					<p>No event found!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/'>Back</Button>
				</div>
			</>
		);
	}

	const { title, date, location, image, description } = event;

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
