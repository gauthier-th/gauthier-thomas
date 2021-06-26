import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/index.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const Home = ({ lang, langPrefix }) => {
	const pageRef = useRef(null);
	useEffect(() => {
		if ( pageRef) {
			setTimeout(() => {
				pageRef.current.classList.add('visible');
			}, 500);
		}
	}, [pageRef]);
	const Translations = langTranslations(lang);
	return <PageContainer className={styles.pageContent}>
		<div className="container d-flex flex-column justify-content-between" ref={pageRef}>
			<div className={mainStyles.rotateAnim}>
				<h1 className="mt-5 display-4 text-right text-light">
					<Translations page='home' translation='title' />
				</h1>
				<h1 className="text-right text-light">
					<Translations page='home' translation='desc1' />
				</h1>
				<h1 className="text-right text-light">
					<Translations page='home' translation='desc2' />
				</h1>
			</div>
			<div className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mb-5", "mt-4", "text-center")}>
				<NavLink to={langPrefix + "/about"} className="d-inline-block p-2">
					<h3>
						<Translations page='home' translation='about' />
					</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default Home;