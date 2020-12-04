import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Home from './pages/Home';
import Page404 from './pages/404';

const App = () => {
	return (
		<BrowserRouter basename='/'>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route component={Page404} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));