import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Page404 from './pages/404';


const AppContent = () => {
	const location = useLocation();
	return <Layout>
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/skills' component={Skills} />
				<Route exact path='/Contact' component={Contact} />
				<Route component={Page404} />
			</Switch>
		</AnimatePresence>
	</Layout>;
}
const App = () => {
	return (
		<BrowserRouter basename='/'>
			<AppContent />
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));