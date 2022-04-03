import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;
	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const year = +filteredYear;
	const month = +filteredMonth;

	if (
		isNaN(year) ||
		isNaN(month) ||
		year < 2021 ||
		year > 2030 ||
		month < 1 ||
		month > 12
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid Filter Data. Please adjust your values!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = getFilteredEvents({ year, month });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No Events found for chosen filter data!</p>
				</ErrorAlert>
				<div className='center'>
					<Button className='center' link='/events'>
						Show All Events
					</Button>
				</div>
			</>
		);
	}

	const date = new Date(year, month - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
};

export default FilteredEventsPage;
