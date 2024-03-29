import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();

	const onAddMeetupHandler = meetupData => {
    fetch(`https://react-getting-started-ff903-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        header: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        history.replace('/');
      });
  };

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</section>
	);
};

export default NewMeetupPage;
