import style from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {
	return (
		<Card>
			<form className={style.form}>
				<div className={style.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' />
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
