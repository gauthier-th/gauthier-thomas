import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import pageEvents from './pageEvents';
import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Page404 from './pages/404';

const pageOrder = [
	'/',
	'/about',
	'/skills',
	'/contact'
];


const AppContent = () => {
	const location = useLocation();
	const history = useHistory();
	const wheelCount = useRef(0);
	const xDown = useRef(null);
	const yDown = useRef(null);
	const lastPageChange = useRef(Date.now());
	const { handleWheel, handleTouchStart, handleTouchCancel, handleTouchEnd } = pageEvents(pageOrder, history, wheelCount, lastPageChange, xDown, yDown);
	useEffect(() => {
		window.addEventListener('wheel', handleWheel, false);
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchcancel', handleTouchCancel, false);
		document.addEventListener('touchend', handleTouchEnd, false);
		return () => {
			window.removeEventListener('wheel', handleWheel, false);
			document.removeEventListener('touchstart', handleTouchStart, false);
			document.removeEventListener('touchcancel', handleTouchCancel, false);
			document.removeEventListener('touchend', handleTouchEnd, false);
		};
	}, []);
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