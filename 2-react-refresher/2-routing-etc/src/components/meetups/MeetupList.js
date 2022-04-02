import style from './MeetupItem.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => (
	<ul
		style={{ listStyle: 'none', margin: '0', padding: '0' }}
		className={style.list}
	>
		{meetups.map(meetup => (
			<MeetupItem key={meetup.id} {...meetup} />
		))}
	</ul>
);

export default MeetupList;
