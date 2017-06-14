/*
 * @Author: ronin
 * @Date:   2017-06-13 15:11:41
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-13 15:25:17
 */

'use strict';

const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('"development"')
			}
		})
	]
})