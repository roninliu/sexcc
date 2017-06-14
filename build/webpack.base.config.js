/*
 * @Author: ronin
 * @Date:   2017-06-13 15:11:41
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 14:59:26
 */

'use strict';
const webpack = require('webpack');
const path = require('path');
const utils = require("./utils");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "../src/"),
	entry: Object.assign(utils.getEntries("../src/views/**/*.js"), {
		vendor: ["vue"]
	}),
	output: {
		path: path.resolve(__dirname, "../static"),
		publicPath: '/',
		filename: 'bundle/[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=./images/[hash].[ext]',
		}, {
			test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			loader: 'file-loader?name=./fonts/[name].[ext]',
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor", //和上面配置的入口对应
			filename: "lib/vendor.js", //导出的文件的名称
		}),
		new ExtractTextPlugin('css/[name].css')
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}
const views = utils.getEntries("../src/views/**/*.html");
for (let key in views) {
	const htmlConf = new HtmlwebpackPlugin({
		filename: path.resolve(utils.config.viewsRoot, key + ".html"),
		template: views[key],
		inject: true,
		hash: true,
		chunks: [key, "vendor"],
		minify: {
			removeComments: true, //去注释
			collapseWhitespace: true, //压缩空格
			removeAttributeQuotes: true //去除属性引用
		}
	})
	module.exports.plugins.push(htmlConf);
}