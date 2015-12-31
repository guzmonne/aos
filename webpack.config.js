var path = require('path')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'src/app.js')
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json'
    ]
  },
  stylus: {
  	use: [require('yeticss')()]
  },
  postcss: [require('autoprefixer')()],
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
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.styl$/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				loader: 'url?limit=25000'
			},
			{
				test: /\.(svg|woff)$/,
				loader: 'url?limit=100000'
			},
			{
				test: /\.otf(\?\S*)?$/,
        loader: 'url-loader?limit=25000'
			},
			{
				test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=25000'
			},
			{
				test: /\.svg(\?\S*)?$/,
        loader: 'url-loader?mimetype=image/svg+xml&limit=100000'
			},
			{
				test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?mimetype=application/octet-stream&limit=100000'
			},
			{
				test: /\.woff2?(\?\S*)?$/,
        loader: 'url-loader?mimetype=application/font-woff&limit=100000'
			}
		]
	}
}
