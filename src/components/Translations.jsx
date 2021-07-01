import React from 'react';

export const defaultLang = 'fr';

const translations = {
	en: {
		default: {
			navbarContact: 'Contact',
			img: 'https://twemoji.maxcdn.com/svg/1f1ec-1f1e7.svg'
		},
		home: {
			title: 'Hi!',
			desc1: 'I\'m Gauthier Thomas,',
			desc2: 'a full-stack web developper.',
			about: 'About me'
		},
		about: {
			home: 'Home',
			title: 'About me',
			subtitle: 'I\'m a computer science student in engineering school at ESIREM who is passionate by programming and web development. ',
			desc1: 'For several years now, programming has been my favorite hobby since I discovered web technologies. I first started with basic websites made with PHP, HTML and CSS, then I went deeper into JavaScript, JQuery and React.',
			desc2: 'Over a year ago, I started freelance so that I could use my skills to work on other projects and gain even more experience. ',
			desc3: 'I can develop a small classic showcase site (for instace for a store), a more complete website (forms, connection, mail sending, ...) but also to create real web applications with the latest technologies. You can see some examples of sites I made on the next page.',
			portfolio: 'Portfolio'
		},
		portfolio: {
			about: 'About me',
			title: 'Portfolio',
			skills: 'My skills'
		},
		skills: {
			portfolio: 'Portfolio',
			title: 'My skills',
			desc: 'As a full-stack web developer, I often program with JavaScript, Node.js and React, but also with PHP.',
			contact: 'Contact'
		},
		contact: {
			skills: 'Skills',
			title: 'Contact',
			email: 'You can contact me by email: ',
			form: 'Or with this form:',
			emailPlaceholder: 'Your email',
			messagePlaceholder: 'Your message',
			messageSent: 'Message sent!',
			sending: 'Sending message...',
			send: 'Send!'
		},
		'404': {
			title: 'Page not found',
			desc: 'Sorry, but this page does not exist.'
		}
	},
	fr: {
		default: {
			navbarContact: 'Contact',
			img: 'https://twemoji.maxcdn.com/svg/1f1eb-1f1f7.svg'
		},
		home: {
			title: 'Salut !',
			desc1: 'Je suis Gauthier Thomas,',
			desc2: 'un développeur web full-stack.',
			about: 'À propos'
		},
		about: {
			home: 'Accueil',
			title: 'À propos',
			subtitle: 'Je suis étudiant en école d\'ingénieur à l\'ESIREM en informatique passionné par la programmation et le développement web.',
			desc1: 'Depuis plusieurs années déjà, la programmation est mon passe temps préféré depuis que j\'ai découvert les technologies du web. J\'ai d\'abord commencé par des sites simples avec PHP, HTML et CSS, puis j\'ai ensuite approfondi avec le JavaScript, JQuery et React.',
			desc2: 'Il y a plus d\'un an déjà, je me suis lancé dans le freelance en tant qu\'auto-entrepreneur afin de pouvoir mettre à profit mes compétences pour travailler sur d\'autres projets et acquérir encore plus d\'expérience.',
			desc3: 'Je suis capable de développer un petit site vitrine classique (pour une boutique par exemple), une site web plus complet (formulaires, connexion, envoi d\'email, ...) mais aussi de créer des véritables applications web avec les dernières technologies. Vous pouvez voir quelques exemples de sites que j\'ai réalisé sur la page suivante.',
			portfolio: 'Portfolio'
		},
		portfolio: {
			about: 'About me',
			title: 'Portfolio',
			skills: 'My skills'
		},
		skills: {
			portfolio: 'Portfolio',
			title: 'Mes compétences',
			desc: 'En tant que développeur full-stack, je programme souvent avec JavaScript, Node.js et React, mais aussi avec PHP.',
			contact: 'Contact'
		},
		contact: {
			skills: 'Mes compétences',
			title: 'Contact',
			email: 'Vous pouvez me contacter par mail : ',
			form: 'Ou avec ce formulaire :',
			emailPlaceholder: 'Votre adresse mail',
			messagePlaceholder: 'Votre message',
			messageSent: 'Message envoyé !',
			sending: 'Envoie du messager...',
			send: 'Envoyer !'
		},
		'404': {
			title: 'Page introuvable',
			desc: 'Désolé, mais cette page n\'existe pas.'
		}
	}
}

export function langTranslations(lang) {
	return ({ page, translation }) => <Translations lang={lang} page={page} translation={translation} />;
}

export function translationContent(lang, page, translation) {
	if (!Object.keys(translations).includes(lang))
		throw 'Language "' + lang + '" not supported';
	if (!Object.keys(translations[lang]).includes(page || 'default'))
		throw 'Unknown page ' + page;
	if (!Object.keys(translations[lang][page || 'default']).includes(translation))
		throw 'Unkown translation ' + translation;
	return translations[lang][page || 'default'][translation];
}

export function getLangs() {
	return Object.keys(translations);
}

export function langFromUrl(pathname) {
	const match = /^\/(\w+)\/?/.exec(pathname);
	if (!match || !getLangs().includes(match[1]))
		return '';
	else
		return match[1];
}
export function langPrefixFromUrl(pathname) {
	const lang = langFromUrl(pathname);
	return lang ? '/' + lang : '';
}

export default function Translations({ lang, page, translation }) {
	return translationContent(lang, page, translation);
}