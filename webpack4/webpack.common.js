const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
	entry: {
		app: "./src/index.js",
		// another: "./src/another-module.js",
		// print: "./src/print.js"
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: "file-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: "file-loader"
			},
			{
				test: /\.xml$/,
				use: "xml-loader"
			}
		]
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: "all"
	// 	}
	// },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'HtmlWebpackPlugin'
		})
	]
}