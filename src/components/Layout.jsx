import React from 'react';
import Stars from './Stars';

const Layout = (props) => {
	return <>
		<Stars />
		<div>
			{props.children}
		</div>
	</>
}

export default Layout;