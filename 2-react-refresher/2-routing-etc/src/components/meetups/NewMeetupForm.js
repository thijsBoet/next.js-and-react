import { useRef } from 'react';
import style from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = props => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitHandler = e => {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	};

	return (
		<Card>
			<form className={style.form} onSubmit={submitHandler}>
				<div className={style.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={style.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={style.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={addressInputRef} />
				</div>
				<div className={style.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						required
						id='description'
						rows='5'
						ref={descriptionInputRef}
					/>
				</div>
				<div className={style.action}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
