import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/portfolio.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const Portfiolio = ({ lang, langPrefix }) => {
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	useEffect(() => {
		if (skillsRef && aboutRef) {
			setTimeout(() => {
				aboutRef.current.classList.add('visible');
				skillsRef.current.classList.add('visible');
			}, 100);
		}
	}, [skillsRef]);
	const Translations = langTranslations(lang);
	return <PageContainer className="container d-flex flex-column justify-content-between">
		<div ref={aboutRef} className={cx(mainStyles.arrowLink, mainStyles.revert, "d-flex", "justify-content-center", "text-center")} style={{ margin: '-3rem 0 1rem 0' }}>
			<NavLink to={langPrefix + "/about"} className="d-inline-block p-2">
				<img src="/img/more.svg" />
				<h3>
					<Translations page='portfolio' translation='about' />
				</h3>
			</NavLink>
		</div>
		<div className={cx(styles.pageContent, "d-flex", "flex-column", "justify-content-between")}>
			<div>
				<h1>
					<Translations page='portfolio' translation='title' />
				</h1>
				
			</div>
			<div ref={skillsRef} className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mt-3", "text-center")}>
				<NavLink to={langPrefix + "/skills"} className="d-inline-block p-2">
					<h3>
						<Translations page='portfolio' translation='skills' />
					</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default Portfiolio;