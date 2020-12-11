import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import styles from '../../../public/css/index.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const Home = () => {
	const pageRef = useRef(null);
	useEffect(() => {
		if ( pageRef) {
			setTimeout(() => {
				pageRef.current.classList.add('visible');
			}, 500);
		}
	}, [pageRef]);
	return <PageContainer className={styles.pageContent}>
		<div className="container d-flex flex-column justify-content-between" ref={pageRef}>
			<div className={mainStyles.rotateAnim}>
				<h1 className="mt-5 display-4 text-right text-light">Hi!</h1>
				<h1 className="text-right text-light">I'm Gauthier Thomas,</h1>
				<h1 className="text-right text-light">a full-stack web developper.</h1>
			</div>
			<div className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mb-5", "mt-4", "text-center")}>
				<NavLink to="/about" className="d-inline-block p-2">
					<h3>About me</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default Home;