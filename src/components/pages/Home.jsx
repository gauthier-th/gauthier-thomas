import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import styles from '../../../public/css/index.module.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
	const pageRef = useRef(null);
	const contentRef = useRef(null);
	useEffect(() => {
		if (contentRef && pageRef) {
			setTimeout(() => {
				pageRef.current.classList.add(styles.visible);
				contentRef.current.classList.add(styles.visible);
			}, 100);
		}
	}, [contentRef, pageRef]);
	return <PageContainer className={styles.pageContent}>
		<div className="container d-flex flex-column justify-content-between" ref={pageRef}>
		<div ref={contentRef} className={styles.rotateAnim}>
			<h1 className="mt-5 display-4 text-right text-light">Hi !</h1>
			<h1 className="text-right text-light">I'm Gauthier Thomas,</h1>
			<h1 className="text-right text-light">a full-stack web developper.</h1>
		</div>
		<div className={cx(styles.showMore, "d-flex", "justify-content-center", "mb-5", "mt-4", "text-center")}>
			<NavLink to="/about" className="d-inline-block p-2">
				<h3>Show more...</h3>
				<img src="/img/more.svg" />
			</NavLink>
		</div>
	</div>
	</PageContainer>;
}

export default Home;