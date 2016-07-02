import * as path from 'path';
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const webpack = require('webpack');

export default {
	entry: {
		bundle: ['./entry'],
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	debug: true,
	devtool: 'source-map',
	module: {
		preLoaders: [
			{
				test: /\.tsx?$/,
				loader: 'tslint'
			}
		],
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: [/node_modules/, nodeModulesPath]
			}
		]
	},
	tslint: {
		emitErrors: true,
		failOnHint: true,
	},
	externals: {
		// don't bundle the 'react' npm package with our bundle.js
		// but get it from a global 'React' variable
		react: 'React'
	},
	plugins: [],
	resolve: {
		root: [path.resolve('./src')],
		extensions: ['', '.ts', '.tsx', '.js']
	}
};
