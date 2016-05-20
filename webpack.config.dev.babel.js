import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-1'],
				},
			},
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(eot|ttf|woff|woff2|svg)$/, loader: 'file' },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'app/index.html',
		}),
	],
	devtool: 'eval',
};