import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import { langTranslations } from '../Translations';
import styles from '../../../public/css/skills.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const techs = [
	'/img/skills/javascript.svg',
	'/img/skills/typescript.svg',
	'/img/skills/nodejs.svg',
	'/img/skills/react.svg',
	'/img/skills/nextjs.svg',
	'/img/skills/php.svg',
	'/img/skills/html.svg',
	'/img/skills/css.svg',
	'/img/skills/bootstrap.svg',
	'/img/skills/jquery.svg',
	'/img/skills/mysql.svg',
	'/img/skills/websocket.svg'
];

const Skills = ({ lang, langPrefix }) => {
	const portfolioRef = useRef(null);
	const pageContent = useRef(null);
	const contactRef = useRef(null);
	useEffect(() => {
		if (portfolioRef && pageContent && contactRef) {
			setTimeout(() => {
				portfolioRef.current.classList.add('visible');
				contactRef.current.classList.add('visible');
			}, 100);
			setTimeout(() => {
				pageContent.current.classList.add('visible');
			}, 500);
		}
	}, [portfolioRef, pageContent, contactRef]);
	const Translations = langTranslations(lang);
	return <PageContainer className="container d-flex flex-column justify-content-between">
		<div ref={portfolioRef} className={cx(mainStyles.arrowLink, mainStyles.revert, "d-flex", "justify-content-center", "text-center")} style={{ margin: '-3rem 0 1rem 0' }}>
			<NavLink to={langPrefix + "/portfolio"} className="d-inline-block p-2">
				<img src="/img/more.svg" />
				<h3>
					<Translations page='skills' translation='portfolio' />
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
				<div className={cx(styles.skills, 'my-5')}>
					{techs.map((tech, i) => (
						<div key={i} className='d-flex justify-content-center align-items-center'>
							<img className={styles.skill} src={tech} />
						</div>
					))}
				</div>
			</div>
			<div ref={contactRef} className={cx(mainStyles.arrowLink, "d-flex", "justify-content-center", "mt-3", "text-center")}>
				<NavLink to={langPrefix + "/contact"} className="d-inline-block p-2">
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