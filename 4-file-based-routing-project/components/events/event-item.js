import Link from 'next/link';
import classes from './event-list.module.css';

const EventItem = ({ id, title, location, date, image }) => {
	const humanReadableDate = new Date(date).toDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.split(',').join('<br />');
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
