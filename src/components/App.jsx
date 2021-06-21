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

const Pages = ({ location, lang }) => (
	<AnimatePresence>
		<Switch location={location} key={location.pathname}>
			<Route exact path='/' render={() => <Home lang={lang} />} />
			<Route exact path='/about' render={() => <About lang={lang} />} />
			<Route exact path='/skills' render={() => <Skills lang={lang} />} />
			<Route exact path='/contact' render={() => <Contact lang={lang} />} />
			<Route render={() => <Page404 lang={lang} />} />
		</Switch>
	</AnimatePresence>
)


const AppContent = () => {
	const location = useLocation();
	const history = useHistory();
	const wheelCount = useRef(0);
	const xDown = useRef(null);
	const yDown = useRef(null);
	const lastPageChange = useRef(Date.now());
	const { handleWheel, handleTouchStart, handleTouchCancel, handleTouchEnd } = pageEvents(pageOrder, history, wheelCount, lastPageChange, xDown, yDown);
	const audio = new Audio('/vzouumm.mp3');
	useEffect(() => {
		window.addEventListener('wheel', handleWheel, false);
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchcancel', handleTouchCancel, false);
		document.addEventListener('touchend', handleTouchEnd, false);
		setTimeout(audio.play, 1000);
		return () => {
			window.removeEventListener('wheel', handleWheel, false);
			document.removeEventListener('touchstart', handleTouchStart, false);
			document.removeEventListener('touchcancel', handleTouchCancel, false);
			document.removeEventListener('touchend', handleTouchEnd, false);
		};
	}, []);
	useEffect(() => {
		audio.play();
	}, [location.pathname]);
	return <Layout lang='en'>
		<Pages location={location} lang='en' />
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