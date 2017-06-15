/*
 * @Author: ronin
 * @Date:   2017-06-13 11:57:30
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-15 17:20:22
 */

'use strict';
const cookie = require("js-cookie");

module.exports = {


	async index(ctx) {
		const token = cookie.get("token");
		if (!token) {
			await ctx.render('login/login', {
				title: "用户登录"
			})
		} else {
			await ctx.render('main/main', {
				title: "主页",
				contents: "sexcc.ccc"
			})
		}
	},
	async login(ctx) {
		await ctx.render('login/login', {
			title: "用户登录"
		})
	}

}