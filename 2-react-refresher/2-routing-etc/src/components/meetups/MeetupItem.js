import style from './MeetupList.module.css';
import Card from '../ui/Card';

const MeetupItem = ({ title, image, address, description }) => (
	<li className={style.item}>
		<Card>
			<div className={style.image}>
				<img src={image} alt={title} style={{ width: '50vw' }} />
			</div>
			<div className={style.content}>
				<h3>{title}</h3>
				<address>{address}</address>
				<p>{description}</p>
			</div>
			<div className={style.actions}>
				<button>To Favorites</button>
			</div>
		</Card>
	</li>
);
//{ id, title, image, address, description }
export default MeetupItem;
