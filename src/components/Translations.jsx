import React from 'react';

const translations = {
	en: {
		default: {
			navbarContact: 'Contact'
		},
		home: {
			title: 'Hi!',
			desc1: 'I\'m Gauthier Thomas',
			desc2: 'a full-stack web developper.',
			about: 'About me'
		},
		about: {
			home: 'Home',
			title: 'About me',
			desc: 'I\'m a French computer science student who is passionate about writing code, building websites and other fun stuff!',
			card1: 'I\'m studying at ESIREM, an engineering school in Dijon.',
			card2: 'I sometimes play video games as CS:GO, LoL or Minecraft.',
			card3: 'Coding is my passion since I discovered PHP and web technologies few years ago.',
			skills: 'My skills'
		},
		skills: {
			about: 'About me',
			title: 'My skills',
			desc: 'As a full-stack web developer, I often program with JavaScript, Node.js and React, but also with PHP.',
			contact: 'Contact'
		},
		contact: {
			skills: 'Skills',
			title: 'Contact',
			email: 'You can contact me by email: ',
			form: 'Or with this form:',
			messageSent: 'Message sent!',
			sending: 'Sending message...',
			send: 'Send!'
		},
		'404': {
			title: 'Page not found',
			desc: 'Sorry, but this page does not exist.'
		}
	}
}

export function langTranslations(lang) {
	return ({ page, translation }) => <Translations lang={lang} page={page} translation={translation} />;
}

export default function Translations({ lang, page, translation }) {
	if (!Object.keys(translations).includes(lang))
		throw 'Language "' + lang + '" not supported';
	if (!Object.keys(translations[lang]).includes(page || 'default'))
		throw 'Unknown page ' + page;
	if (!Object.keys(translations[lang][page || 'default']).includes(translation))
		throw 'Unkown translation ' + translation;
	return translations[lang][page || 'default'][translation];
}