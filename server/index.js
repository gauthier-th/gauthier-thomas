const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const favicon = require('serve-favicon');

const app = express();

if (process.env.NODE_ENV === 'production')
	app.set('trust proxy', 1);
else
	app.use(morgan('dev'));

app.enable('strict routing');
app.use(helmet({
	contentSecurityPolicy: false
}));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./root'));

app.listen(process.env.PORT, () => {
	console.log('Listening on port ' + process.env.PORT + '.');
});