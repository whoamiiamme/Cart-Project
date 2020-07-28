import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';
import ModelPost from './../container/modelPost';
import DashBoard from './../container/localHost/DashBoard';

const App = (props) => {
	



	return (
		<Router>
 
			<Header />

			<Switch>
				<Route exact={true} path="/" component={ModelPost} />
				<Route path='/profile/:userId' component={DashBoard} />
			</Switch>

		</Router>
	);
};

export default App;
