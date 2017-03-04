var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var nodeExternals = require('webpack-node-externals')

const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV!=='production';

const config = {
	devtool: 'source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.scss']
	},
	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],
	plugins: [

		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin('style.css', {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [["env", {
						"targets": {
							"browsers": ["last 2 versions", "safari >= 7"]
						}
					}], "react"]
				},
				include: path.join(__dirname, 'src')
			},
			{
				// Transform our own .(sass|css) files with PostCSS and CSS-modules
				test: /\.(sass|css)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: ExtractTextPlugin.extract('style?singleton', [
					`css-loader?modules&importLoaders=1&sourceMap=${CSS_MAPS}`,
					'postcss-loader',
					`sass-loader?sourceMap=${CSS_MAPS}`
				].join('!'))
			}
		]
	}
}

const serverConfig = {
	name: 'server',
	target: 'node',
	externals: [nodeExternals()],
	entry: [
		'./src/server.js'
	],
	output: {
		path: path.join(__dirname, 'bin/'),
		filename: 'server.js',
		publicPath: 'bin/',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.scss']
	},
	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-2', 'react']
				},
				include: path.join(__dirname, 'src')
			},
			{
				// Transform our own .(sass|css) files with PostCSS and CSS-modules
				test: /\.(scss|css)$/,
				loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	}
}

module.exports = [config, serverConfig];