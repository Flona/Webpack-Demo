var webpack = require("webpack")
var UglifyJsPlugin = require("uglifyjs-webpack-plugin")
var merge = require("webpack-merge")
var common = require("./webpack.common.js")

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
})