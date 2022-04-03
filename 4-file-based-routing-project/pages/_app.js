// import '../components/ui/button.css';
import '../components/events/event-item.css';
import '../styles/globals.css';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
