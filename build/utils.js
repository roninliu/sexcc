/*
 * @Author: ronin
 * @Date:   2017-06-13 16:28:45
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-13 17:50:36
 */

'use strict';
const glob = require("glob");
const path = require("path");
//const viewRoot = path.resolve(__dirname, "../src/views");

exports.config = {
	srcViewsRoot: path.resolve(__dirname, "../src/views"),
	viewsRoot: path.resolve(__dirname, "../views")
}


exports.getEntries = (src) => {
	const entry = {};
	glob.sync(path.resolve(__dirname, src)).forEach(item => {
		const chunk = path.dirname(item).slice(this.config.srcViewsRoot.length + 1) + "/" + path.basename(item, path.extname(item));
		entry[chunk] = item;
	})
	return entry;
}