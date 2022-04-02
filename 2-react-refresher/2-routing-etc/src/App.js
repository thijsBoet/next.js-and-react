import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<AllMeetups />
				</Route>
				<Route path='/new-meetup' exact>
					<NewMeetup />
				</Route>
				<Route path='/favorites' exact>
					<Favorites />
				</Route>
			</Switch>
		</Layout>
	);
};

export default App;
