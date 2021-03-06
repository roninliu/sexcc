/*
 * @Author: ronin
 * @Date:   2017-06-13 11:57:30
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-16 10:45:57
 */

'use strict';
const md5 = require("md5");
const cookie = require("js-cookie");

module.exports = {
	async login(ctx) {
		const {
			username,
			password
		} = ctx.request.body;
		if (username !== "admin") {
			return ctx.fail({
				msg: "用户名不正确"
			})
		} else {
			if (md5("admin") === password) {
				return ctx.success({
					data: {
						username,
						password
					}
				})
			} else {
				return ctx.fail({
					msg: "密码错误"
				})
			}
		}
	}
}