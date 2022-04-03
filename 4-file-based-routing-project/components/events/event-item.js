import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

const EventItem = ({ id, title, location, date, image }) => {
	const humanReadableDate = new Date(date).toDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className='item'>
			<img src={'/' + image} alt={title} />
			<div className='content'>
				<div className='summary'>
					<h2>{title}</h2>
					<div className='date'>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className='address'>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className='actions'>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className='icon'>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
