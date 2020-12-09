import React from 'react';
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
		<h1>Page not found</h1>
		<span>Sorry, but this page does not exist.</span>
	</motion.div>;
}

export default Home;