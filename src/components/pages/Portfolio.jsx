import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import PageContainer from '../PageContainer';
import { langTranslations, translationContent } from '../Translations';
import 'react-responsive-carousel/lib/styles/carousel.css';
import styles from '../../../public/css/portfolio.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const images = (lang) => [
	{
		src: '/img/portfolio/isift-login.png',
		description: translationContent(lang, 'portfolio', 'image1'),
		target: 'https://solidarite-territoire.isift.fr/Isift/'
	},
	{
		src: '/img/portfolio/gauthierth.fr.png',
		description: translationContent(lang, 'portfolio', 'image2'),
		target: 'https://gauthierth.fr/'
	},
	{
		src: '/img/portfolio/isift-form.png',
		description: translationContent(lang, 'portfolio', 'image3'),
		target: 'https://solidarite-territoire.isift.fr/Isift/'
	},
	{
		src: '/img/portfolio/thierry-pellard.png',
		description: translationContent(lang, 'portfolio', 'image4'),
		target: 'https://www.thierry-pellard-magnetiseur.com/'
	},
	{
		src: '/img/portfolio/drawing-arm.png',
		description: translationContent(lang, 'portfolio', 'image5'),
		target: 'https://github.com/gauthier-th/drawing-arm'
	}
];

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
				<Carousel
					className={styles.carousel}
					showArrows={true}
					infiniteLoop={true}
					useKeyboardArrows={true}
					autoPlay={true}
					swipeable={true}
					emulateTouch={true}
					showThumbs={false}
					showStatus={false}
					stopOnHover={true}
					interval={6000}
					onClickItem={(index) => {
						if (images(lang)[index].target)
							window.open(images(lang)[index].target, '_blank');
					}}
				>
					{images(lang).map(({ src, description, target }) => (
						<div className={cx({ [styles.selected]: !!target })}>
							<img src={src} />
							{description && <p className="legend">{description}</p>}
						</div>
					))}
				</Carousel>
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