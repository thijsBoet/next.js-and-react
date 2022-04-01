import Todo from './components/Todo';

const App = () => {
	return (
		<div className='card'>
			<h1>My Todo's</h1>
			<Todo text='Learn React' />
			<Todo text='Master Next.js' />
			<Todo text='Become Node.js Ninja' />
		</div>
	);
};

export default App;
