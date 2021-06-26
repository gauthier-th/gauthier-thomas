import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/about.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const About = ({ lang, langPrefix }) => {
	const homeRef = useRef(null);
	const pageContent = useRef(null);
	const skillsRef = useRef(null);
	useEffect(() => {
		if (skillsRef && homeRef) {
			setTimeout(() => {
				homeRef.current.classList.add('visible');
				skillsRef.current.classList.add('visible');
			}, 100);
			setTimeout(() => {
				pageContent.current.classList.add('visible');
			}, 500);
		}
	}, [skillsRef]);
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
		<div ref={pageContent} className={cx(styles.pageContent, "d-flex", "flex-column", "justify-content-between")}>
			<div>
				<h1>
					<Translations page='about' translation='title' />
				</h1>
				<h4>
					<Translations page='about' translation='desc' />
				</h4>
				<div className="my-5 d-flex flex-column justify-content-between">
					<div className="d-flex justify-content-start justify-content-lg-end">
						<div className={cx(mainStyles.rotateAnim, "d-flex", "align-items-center", "flex-row-reverse", "flex-lg-row")} style={{ transitionDelay: '.2s, .2s' }}>
							<span>
								<Translations page='about' translation='card1' />
							</span>
							<img src="/img/studency.svg" className="mr-3 mr-lg-0 ml-lg-3" />
						</div>
					</div>
					<div className="mt-3 d-flex justify-content-start">
						<div className={cx(mainStyles.rotateAnim, "d-flex", "align-items-center")} style={{ transitionDelay: '.5s, .5s' }}>
							<img src="/img/displaygame.svg" className="mr-3" />
							<span>
								<Translations page='about' translation='card2' />
							</span>
						</div>
					</div>
					<div className="mt-3 d-flex justify-content-start justify-content-lg-end">
						<div className={cx(mainStyles.rotateAnim, "d-flex", "align-items-center", "flex-row-reverse", "flex-lg-row")} style={{ transitionDelay: '.8s, .8s' }}>
							<span>
								<Translations page='about' translation='card3' />
							</span>
							<img src="/img/code.svg" className="mr-3 mr-lg-0 ml-lg-3" />
						</div>
					</div>
				</div>
			</div>
			<div ref={skillsRef} className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mt-3", "text-center")}>
				<NavLink to={langPrefix + "/skills"} className="d-inline-block p-2">
					<h3>
						<Translations page='about' translation='skills' />
					</h3>
					<img src="/img/more.svg" />
				</NavLink>
			</div>
		</div>
	</PageContainer>;
}

export default About;