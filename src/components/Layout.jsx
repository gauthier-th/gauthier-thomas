import React, { useState } from 'react';
import Stars from './Stars';
import Navbar from './Navbar';
import LoadAnimation from './LoadAnimation';

const Layout = (props) => {
	const [navbarIconEl, setNavbarIconEl] = useState(null);
	return <>
		<Stars />
		<Navbar onIconLoad={setNavbarIconEl} />
		<LoadAnimation navbarIconEl={navbarIconEl} />
		<div id="content" className="container">
			{props.children}
		</div>
	</>
}

export default Layout;