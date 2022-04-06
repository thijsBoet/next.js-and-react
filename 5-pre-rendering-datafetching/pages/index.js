import dummyBackend from '../data/dummy-backend.json';

function HomePage({ products }) {
	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
}

export const getStaticProps = async ctx => {
	return {
		props: {
			products: [
				{ id: 1, title: 'Product 1' },
				{ id: 2, title: 'Product 2' },
				{ id: 2, title: 'Product 3' },
			],
		},
	};
};

export default HomePage;
