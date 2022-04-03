import { useRef } from 'react';
import Button from '../ui/button';
import classes from './events-search.module.css';

const EventsSearch = ({ onSearch }) => {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	const submitHandler = e => {
		e.preventDefault();

		const SelectedYear = yearInputRef.current.value;
		const SelectedMonth = monthInputRef.current.value;

		onSearch(SelectedYear, SelectedMonth);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor='year'>Year</label>
					<select id='year' ref={yearInputRef}>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor='month'>Month</label>
					<select id='month' ref={monthInputRef}>
						<option value='1'>Januari</option>
						<option value='2'>Februari</option>
						<option value='3'>March</option>
						<option value='4'>April</option>
						<option value='5'>May</option>
						<option value='6'>June</option>
						<option value='7'>July</option>
						<option value='8'>August</option>
						<option value='9'>September</option>
						<option value='10'>October</option>
						<option value='11'>November</option>
						<option value='12'>December</option>
					</select>
				</div>
			</div>
			<Button>Find Event</Button>
		</form>
	);
};

export default EventsSearch;
