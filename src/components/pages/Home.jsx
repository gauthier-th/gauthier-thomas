import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { pageStyle, pageVariants, pageTransition } from './page';

const Home = () => {
	return <motion.div
		style={pageStyle}
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
	>
		<h1>Home</h1>
		<Link to="/about">About</Link>
	</motion.div>;
}

export default Home;