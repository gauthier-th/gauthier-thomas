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
		<h1>404 Not Found</h1>
	</motion.div>;
}

export default Home;