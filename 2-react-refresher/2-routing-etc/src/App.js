import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

const App = () => {
	return (
    <div>
      <MainNavigation />
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
		</div>
	);
};

export default App;
