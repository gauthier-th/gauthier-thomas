import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import pageEvents from './pageEvents';
import { defaultLang, getLangs } from './Translations';
import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Page404 from './pages/404';

const pages = {
	'/': Home,
	'/about': About,
	'/portfolio': Portfolio,
	'/skills': Skills,
	'/contact': Contact
}

const Pages = ({ location }) => {
	const LangPages = ({ match }) => {
		let matchUrl = Object.keys(pages).includes(match.url) ? '' : match.url;
		let pageLang = matchUrl ? match.params?.pageLang : defaultLang;
		if (!getLangs().includes(pageLang)) {
			matchUrl = '';
			pageLang = defaultLang;
		}
		return <Switch>
			{Object.keys(pages).map(page => {
				const Page = pages[page];
				return <Route key={page} exact path={matchUrl + page} render={() => <Page lang={pageLang} langPrefix={'/' + pageLang} />} />
			})}
			<Route render={() => <Page404 lang={pageLang} langPrefix={'/' + pageLang} />} />
		</Switch>;
	};
	return <AnimatePresence>
		<Switch location={location} key={location.pathname}>
			<Route path='/:pageLang?' component={LangPages} />
			<Route render={() => <Page404 lang={defaultLang} langPrefix={''} />} />
		</Switch>
	</AnimatePresence>;
}


const AppContent = () => {
	const location = useLocation();
	const history = useHistory();
	const wheelCount = useRef(0);
	const xDown = useRef(null);
	const yDown = useRef(null);
	const lastPageChange = useRef(Date.now());
	const { handleWheel, handleTouchStart, handleTouchCancel, handleTouchEnd } = pageEvents(Object.keys(pages), location, history, wheelCount, lastPageChange, xDown, yDown);
	const audio = new Audio('/vzouumm.mp3');
	useEffect(() => {
		window.addEventListener('wheel', handleWheel, false);
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchcancel', handleTouchCancel, false);
		document.addEventListener('touchend', handleTouchEnd, false);
		setTimeout(audio.play, 1000);
		if (location.pathname === '/' && (navigator.language || navigator.userLanguage) !== defaultLang) {
			if (getLangs().includes((navigator.language || navigator.userLanguage)))
				history.push('/' + (navigator.language || navigator.userLanguage));
			else
				history.push('/en');
		}
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
	return <Layout>
		<Pages location={location} />
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