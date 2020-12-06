import React, { useRef, useState } from 'react';
import cx from 'classnames';
import styles from '../../public/css/styles.module.css'
import Stars from './Stars';
import Navbar from './Navbar';
import LoadAnimation from './LoadAnimation';

const Layout = (props) => {
	const [navbarIconEl, setNavbarIconEl] = useState(null);
	return <>
		<Stars />
		<Navbar onIconLoad={setNavbarIconEl} />
		<LoadAnimation navbarIconEl={navbarIconEl} />
		<div className={cx(styles.content, "container")}>
			{props.children}
		</div>
	</>
}

export default Layout;