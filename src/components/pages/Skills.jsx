import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/skills.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const Skills = ({ lang }) => {
	const aboutRef = useRef(null);
	const pageContent = useRef(null);
	const contactRef = useRef(null);
	useEffect(() => {
		if (aboutRef && pageContent && contactRef) {
			setTimeout(() => {
				aboutRef.current.classList.add('visible');
				contactRef.current.classList.add('visible');
			}, 100);
			setTimeout(() => {
				pageContent.current.classList.add('visible');
			}, 500);
		}
	}, [aboutRef, pageContent, contactRef]);
	const Translations = langTranslations(lang);
	return <PageContainer className="container d-flex flex-column justify-content-between">
		<div ref={aboutRef} className={cx(mainStyles.arrowLink, mainStyles.revert, "d-flex", "justify-content-center", "text-center")} style={{ margin: '-3rem 0 1rem 0' }}>
			<NavLink to="/about" className="d-inline-block p-2">
				<img src="/img/more.svg" />
				<h3>
					<Translations page='skills' translation='about' />
				</h3>
			</NavLink>
		</div>
		<div ref={pageContent} className={cx(styles.pageContent, "d-flex", "flex-column", "justify-content-between")}>
			<div>
				<h1>
					<Translations page='skills' translation='title' />
				</h1>
				<h4>
					<Translations page='skills' translation='desc' />
				</h4>
				<div className="my-5 d-flex flex-column justify-content-between">
					<div className={cx(styles.skill, styles.w90)} style={{ transitionDelay: '.4s, .4s' }}>
						<div className={styles.name}>JavaScript</div>
						<div className={styles.progress}></div>
						<span>90%</span>
					</div>
					<div className={cx(styles.skill, styles.w70)} style={{ transitionDelay: '.6s, .6s' }}>
						<div className={styles.name}>React</div>
						<div className={styles.progress}></div>
						<span>70%</span>
					</div>
					<div className={cx(styles.skill, styles.w90)} style={{ transitionDelay: '.8s, .8s' }}>
						<div className={styles.name}>Node.js</div>
						<div className={styles.progress}></div>
						<span>90%</span>
					</div>
					<div className={cx(styles.skill, styles.w65)} style={{ transitionDelay: '1s, 1s' }}>
						<div className={styles.name}>PHP</div>
						<div className={styles.progress}></div>
						<span>65%</span>
					</div>
					<div className={cx(styles.skill, styles.w95)} style={{ transitionDelay: '1.2s, 1.2s' }}>
						<div className={styles.name}>HTML</div>
						<div className={styles.progress}></div>
						<span>95%</span>
					</div>
					<div className={cx(styles.skill, styles.w90)} style={{ transitionDelay: '1.4s, 1.4s' }}>
						<div className={styles.name}>CSS</div>
						<div className={styles.progress}></div>
						<span>90%</span>
					</div>
					<div className={cx(styles.skill, styles.w80)} style={{ transitionDelay: '1.6s, 1.6s' }}>
						<div className={styles.name}>Bootstrap</div>
						<div className={styles.progress}></div>
						<span>80%</span>
					</div>
				</div>
			</div>
			<div ref={contactRef} className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mt-3", "text-center")}>
				<NavLink to="/contact" className="d-inline-block p-2">
					<h3>
						<Translations page='skills' translation='contact' />
					</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default Skills;