var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV!=='production';


module.exports = [config, serverConfig];

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
