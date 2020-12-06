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
							url: false,
							importLoaders: 1,
							modules: true
						}
					}
				],
				include: /\.module\.css$/
			},
			{
				test: /\.css$/,
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
				],
				exclude: /\.module\.css$/
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	mode: 'development'
};
