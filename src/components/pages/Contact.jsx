import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import PageContainer from '../PageContainer';
import styles from '../../../public/css/contact.module.css';
import mainStyles from '../../../public/css/styles.module.css';

const Contact = () => {
	const [mailSended, setMailSended] = useState(false);
	const [mailSending, setMailSending] = useState(false);
	const [error, setError] = useState(null);
	const skillsRef = useRef(null);
	const pageContent = useRef(null);
	const mailInputRef = useRef(null);
	const textearRef = useRef(null);
	useEffect(() => {
		if (skillsRef) {
			setTimeout(() => {
				skillsRef.current.classList.add('visible');
				pageContent.current.classList.add('visible');
			}, 100);
		}
	}, [skillsRef, pageContent]);
	const sendForm = () => {
		const mail = mailInputRef.current.value;
		const content = textearRef.current.value;
		if (!mail || !content)
			return;
		if (!mail.match(/^.+@.+\..+$/))
			return setError('Invalid email!');
		if (content.length > 1000)
			return setError('Too long message!');
		setMailSending(true);
		fetch('/contact', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ mail, content })
		}).then(() => {
			console.log('!!');
			setMailSending(false);
			setMailSended(true);
		}).catch(() => {
			setError('Error while sending message...');
		});
	};
	return <PageContainer className="container d-flex flex-column justify-content-between">
		<div ref={skillsRef} className={cx(mainStyles.arrowLink, mainStyles.revert, "d-flex", "justify-content-center", "text-center")} style={{ margin: '-3rem 0 1rem 0' }}>
			<NavLink to="/skills" className="d-inline-block p-2">
				<img src="/img/more.svg" />
				<h3>Skills</h3>
			</NavLink>
		</div>
		<div ref={pageContent} className={cx(styles.pageContent, "d-flex", "flex-column", "justify-content-between")}>
			<div>
				<h1 className="mb-5">Contact</h1>
				<h4>
					You can contact me by email: <a href="mailto:mail@gauthier-thomas.dev">mail@gauthier-thomas.dev</a>
				</h4>
				<h4 className="mt-4">Or with this form:</h4>
				<form action="#" method="post" className="mt-4">
					<div>
						<input ref={mailInputRef} type="email" placeholder="Your email" disabled={mailSended || mailSending} /><br />
						<textarea ref={textearRef} placeholder="Your message" className="mt-4" disabled={mailSended || mailSending}></textarea><br />
						<div className="d-flex justify-content-between align-items-center">
							{(() => {
								if (mailSended)
									return <span className="text-success" style={{ fontWeight: 300 }}>Message sent!</span>;
								else if (mailSending)
									return <span style={{ fontWeight: 300 }}>Sending message...</span>;
								else if (error)
									return <span className="text-danger" style={{ fontWeight: 300 }}>{error}</span>;
								else
									return <div></div>;
							})()}
							<div className={cx(mainStyles.styledButtonContainer, "mt-4", mailSended || mailSending ? "disabled" : null)}>
								<button type="button" className={mainStyles.styledButton} onClick={sendForm}>Send!</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</PageContainer>;
}

export default Contact;