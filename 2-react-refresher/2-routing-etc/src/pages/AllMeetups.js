import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://react-getting-started-ff903-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`
		)
			.then(response => {
				response.json();
			})
			.then(data => {
				console.log(data)
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}

				setIsLoading(false);
				setLoadedMeetups(meetups);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
};

export default AllMeetupsPage;
