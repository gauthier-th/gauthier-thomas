import React from 'react';

const translations = {
	en: {
		default: {
			navbarContact: 'Contact'
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
			desc: 'I\'m a French computer science student who is passionate about writing code, building websites and other fun stuff!',
			card1: 'I\'m studying at ESIREM, an engineering school in Dijon, France.',
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
			navbarContact: 'Contact'
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
			desc: 'Je suis un étudiant en informatique passionné par la programmation et le développement web.',
			card1: 'J\'étudie actuellement à l\'ESIREM, une école d\'ingénieur à Dijon.',
			card2: 'Je joue parfois à des jeux comme CS:GO, LoL ou Minecraft.',
			card3: 'La programmation est une passion depuis que j\'ai découvert le web il y a quelques années.',
			skills: 'Mes compétences'
		},
		skills: {
			about: 'À propos',
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

export default function Translations({ lang, page, translation }) {
	return translationContent(lang, page, translation);
}