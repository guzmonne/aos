var path = require('path')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'src/app.js')
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				//include: [
				//	path.resolve(__dirname, "src"),
				//],
				//loader: "babel?presets[]=react,presets[]=es2015"
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000'
			},
			{
				test: /\.(svg|woff)$/,
				loader: 'url?limit=100000'
			}
		]
	}
}
