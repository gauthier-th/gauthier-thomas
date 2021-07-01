import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/about.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const About = ({ lang, langPrefix }) => {
	const homeRef = useRef(null);
	const descRef = useRef(null);
	const portfolioRef = useRef(null);
	useEffect(() => {
		if (portfolioRef && homeRef) {
			setTimeout(() => {
				homeRef.current.classList.add('visible');
				portfolioRef.current.classList.add('visible');
			}, 100);
			setTimeout(() => {
				descRef.current.classList.add('visible');
			}, 500);
		}
	}, [portfolioRef]);
	const Translations = langTranslations(lang);
	return <PageContainer className="container d-flex flex-column justify-content-between">
		<div ref={homeRef} className={cx(mainStyles.arrowLink, mainStyles.revert, "d-flex", "justify-content-center", "text-center")} style={{ margin: '-3rem 0 1rem 0' }}>
			<NavLink to={langPrefix + "/"} className="d-inline-block p-2">
				<img src="/img/more.svg" />
				<h3>
					<Translations page='about' translation='home' />
				</h3>
			</NavLink>
		</div>
		<div className={cx(styles.pageContent, "d-flex", "flex-column", "justify-content-between")}>
			<div>
				<h1>
					<Translations page='about' translation='title' />
				</h1>
				<h4>
					<Translations page='about' translation='subtitle' />
				</h4>
				<div ref={descRef} className={cx(styles.desc, "mt-4")}>
					<p className={mainStyles.rotateAnim} style={{ transitionDelay: '.2s, .2s' }}>
						<Translations page='about' translation='desc1' />
					</p>
					<p className={mainStyles.rotateAnim} style={{ transitionDelay: '.5s, .5s' }}>
						<Translations page='about' translation='desc2' />
					</p>
					<p className={mainStyles.rotateAnim} style={{ transitionDelay: '.8s, .8s' }}>
						<Translations page='about' translation='desc3' />
					</p>
				</div>
			</div>
			<div ref={portfolioRef} className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mt-3", "text-center")}>
				<NavLink to={langPrefix + "/portfolio"} className="d-inline-block p-2">
					<h3>
						<Translations page='about' translation='portfolio' />
					</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default About;