const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

let lastMessages = [];

router.post('/contact', (req, res) => {
	if (typeof req.body !== 'object')
		return;
	if (typeof req.body.mail !== 'string' || typeof req.body.content !== 'string' || !req.body.mail.match(/^.+@.+\..+$/) || req.body.content.length > 1000)
		return;

	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	if (lastMessages.includes(ip))
		return;
	lastMessages.push(ip);
	setTimeout(() => {
		lastMessages = lastMessages.filter(i => ip !== i);
	}, 2e4);

	fetch(process.env.WEBHOOK_CONTACT_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			content: 'Mail: ' + req.body.mail + '\nMessage:\n```\n' + req.body.content + '```'
		})
	});

	res.json({}).end();
});


router.all('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;