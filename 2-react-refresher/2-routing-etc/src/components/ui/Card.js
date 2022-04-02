import styled from 'styled-components';
import style from './Card.module.css';

const Card = ({ children }) => {
	const Div = styled.div`
		background-color: white;
		border-radius: 6px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	`;

	return (
		<div>
			<Div className={style.card}>{children}</Div>
		</div>
	);
};

export default Card;
