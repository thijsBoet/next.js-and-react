import { getFeaturedEvents } from "../../dummy-data";

const AllEventsPage = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<h1>All Events</h1>
			<ul></ul>
		</div>
	);
}

export default AllEventsPage;