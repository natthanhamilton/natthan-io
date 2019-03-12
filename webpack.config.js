const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BrotliPlugin = require('brotli-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const DIST_DIR = path.resolve(__dirname, 'dist/app');
const APP_DIR = path.resolve(__dirname, 'src/app');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = (env) => {
	const isDev = env == 'development';

	return {
		mode: env,

		context: path.resolve(__dirname),
		entry: {
			main: APP_DIR + '/app.jsx',
		},
		node: {
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
		},
		output: {
			path: DIST_DIR,

			filename: 'js/[name].[hash:6].bundle.js',
			chunkFilename: 'js/[id].[chunkhash:6].chunk.js',

			sourceMapFilename: isDev
				? 'js/[name].bundle.map'
				: 'js/[name].[chunkhash:6].bundle.map',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: 'babel-loader?cacheDirectory',
					exclude: [/node_modules/],
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
			modules: [APP_DIR, 'node_modules'],
		},
		devServer: {
			contentBase: DIST_DIR,
			port: 8080,
			compress: true,
			publicPath: '/',

			historyApiFallback: true,
			stats: 'minimal',
		},
		plugins: [
			// Environment variables for the app
			new Dotenv(),

			// Inject the build environment
			new webpack.DefinePlugin({
				env: {
					NODE_ENV: isDev ? 'development' : 'production',
				},
			}),

			// Delete current build
			new CleanWebpackPlugin([BUILD_DIR]),

			// Move to Dist
			new CopyWebpackPlugin([
				{
					from: './src/index.html',
				},
				{
					from: './src/assets',
					to: './assets',
				},
				{
					from: './distAssets',
					to: '../',
				},
				{
					from: './.elasticbeanstalk',
					to: '../.elasticbeanstalk',
				},
			]),

			new HtmlWebpackPlugin({
				template: SRC_DIR + '/index.html',
			}),
			// new webpack.optimize.AggressiveMergingPlugin(),
			// new BrotliPlugin({
			// 	asset: '[path].br[query]',
			// 	test: /\.js$|\.css$|\.html$/,
			// 	threshold: 10240,
			// 	minRatio: 0.8,
			// }),
		],
	};
};
