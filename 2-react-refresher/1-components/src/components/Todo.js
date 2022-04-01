import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ({ text }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const deleteHandler = () => setModalIsOpen(true);
	const closeModalHandler = () => setModalIsOpen(false);

	return (
		<div>
			<h2>{text}</h2>
			<div className='actions'>
				<button className='btn' onClick={deleteHandler}>
					Delete
				</button>
			</div>
			{modalIsOpen && (
				<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
			)}
			{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
		</div>
	);
};

export default Todo;
