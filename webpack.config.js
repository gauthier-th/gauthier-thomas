const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
	entry: [path.resolve(__dirname, 'src/components/App.jsx')],
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	mode: 'development'
};
