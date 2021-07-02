import React, { useEffect, useRef } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import cx from 'classnames';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import Translations, { langFromUrl, defaultLang, getLangs, translationContent } from './Translations';
import styles from '../../public/css/styles.module.css';

const Navbar = ({ onIconLoad }) => {
	const location = useLocation();
	const history = useHistory();
	const lang = langFromUrl(location.pathname);
	const langPrefix = lang ? "/" + lang : "";
	const iconRef = useRef(null);
	useEffect(() => {
		onIconLoad && onIconLoad(iconRef);
	}, [iconRef]);
	return <div className={styles.navbar}>
		<div className="container d-flex justify-content-between p-2">
			<NavLink to={langPrefix + "/"} className={styles.logo}>
				<svg ref={iconRef} className={styles.logo} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2000 2000" style={{ enableBackground: "new 0 0 2000 2000" }} xmlSpace="preserve">
					<defs>
						<linearGradient id="logoGTGradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
							<stop offset="0%" stopColor="#3b68ff">
								<animate attributeName="stop-color" values="#3b68ff; #00ffcc; #3b68ff" dur="4s" repeatCount="indefinite"></animate>
							</stop>
							<stop offset="100%" stopColor="#00ffcc">
								<animate attributeName="stop-color" values="#00ffcc; #3b68ff; #00ffcc" dur="4s" repeatCount="indefinite"></animate>
							</stop>
						</linearGradient>
					</defs>
					<polygon style={{ fill: "url(#logoGTGradient)" }} points="1698.3,494 1841.1,245.7 1382.4,245.7 1386.2,247.9 1244.7,494 "/>
					<polygon style={{ fill: "url(#logoGTGradient)" }} points="774.4,621.9 917.1,870.2 1195.6,870.2 1147.4,953.8 1112.4,1014.5 1110.5,1017.8 1073.5,1081.8 970.8,1259.6 930.1,1330.1 894.8,1391.3 881.1,1415 856.3,1458 856.3,1458 827.4,1508 831.9,1515.7 832,1515.8 866.2,1575.1 873.1,1587.1 883.2,1604.5 941.9,1706.3 942.1,1706.3 970.9,1756.2 999.7,1706.3 1062.5,1597.6 1090.3,1549.3 1114.2,1508 1143,1458 1143,1458 1216.9,1330.1 1360.3,1081.8 1434.1,953.8 1482.4,870.2 1760.8,870.2 1903.6,621.9 "/>
					<polygon style={{ fill: "url(#logoGTGradient)" }} points="887.4,1111.5 952.5,998.1 951.9,998.1 821.9,998.1 783.4,931.5 748.1,870.2 604.7,621.9 565.8,554.6 530.8,494 530.8,494 1074.8,494 1217.6,245.7 100.7,245.7 100.8,245.7 100.7,245.7 168.3,362.7 172.5,370 243.8,494 244.1,494 678.5,1246.4 809.1,1246.4 809.8,1246.4 886.3,1113.3 "/>
				</svg>
				<div></div>
			</NavLink>
			<div className="items d-flex align-content-start align-items-center">
				<a href="https://github.com/gauthier-th" target="_blank" style={{ top: 0 }}>
					<img className="mr-2 mr-sm-3" src="/img/github-mark.svg" style={{ height: 32 }} />
				</a>
				<a href="https://www.linkedin.com/in/gauthier-thomas-a509651b7" target="_blank" style={{ top: 0 }}>
					<img className="mr-2 mr-sm-3" src="/img/linkedin.svg" style={{ height: 32 }} />
				</a>
				<DropDown {...{ lang: lang || defaultLang, langPrefix, history }} />
				<div className={cx('ml-2 ml-sm-3', styles.styledButtonContainer)}>
					<NavLink className={styles.styledButton} to={langPrefix + "/contact"}>
						<Translations lang={lang || defaultLang} translation='navbarContact' />
					</NavLink>
				</div>
			</div>
		</div>
	</div>;
}

const DropDown = ({ lang, langPrefix, history }) => {
	const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(getLangs().length);
	return <div className={styles.menuContainer}>
		<button className={styles.menuButton} {...buttonProps}>
			<img src={translationContent(lang, 'default', 'img')} />
		</button>
		<div className={cx(styles.menuList, isOpen ? 'visible' : '')} role='menu'>
			{getLangs().map((l, i) => (
				<a
					{...itemProps[i]}
					key={l}
					onClick={() => {
						setIsOpen(false);
						if (lang !== l) {
							const newLangPrefix = l === defaultLang ? '' : '/' + l;
							history.push(newLangPrefix + history.location.pathname.substr(langPrefix.length));
						}
					}}
				>
					<img src={translationContent(l, 'default', 'img')} />
				</a>
			))}
		</div>
	</div>;
}

export default Navbar;