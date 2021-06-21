import React, { useState } from 'react';
import cx from 'classnames';
import styles from '../../public/css/styles.module.css'
import Stars from './Stars';
import Navbar from './Navbar';
import LoadAnimation from './LoadAnimation';

const Layout = ({ children, lang }) => {
	const [navbarIconEl, setNavbarIconEl] = useState(null);
	const [loadCompleted, setLoadCompleted] = useState(false);
	return <>
		<Stars />
		<Navbar onIconLoad={setNavbarIconEl} lang={lang} />
		<LoadAnimation navbarIconEl={navbarIconEl} onEnd={() => setLoadCompleted(true)} />
		{loadCompleted && <div className={cx(styles.content, "container")}>
			{children}
		</div>}
	</>
}

export default Layout;