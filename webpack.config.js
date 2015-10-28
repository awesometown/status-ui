module.exports = {
	context: __dirname + "\\app",
	entry: ".\\app.js",

	output: {
		filename: "app.js",
		path: __dirname + "\\dist",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel-loader"]
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"],
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			},

			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
		]
	}
}
