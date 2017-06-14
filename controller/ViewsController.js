/*
 * @Author: ronin
 * @Date:   2017-06-13 11:57:30
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 15:41:06
 */

'use strict';
module.exports = {
	async index(ctx) {
		await ctx.render('main/main', {
			title: "sexcc",
			contents: "sexcc.ccc"
		})
	},
	async login(ctx) {
		await ctx.render('login/login', {
			title: "用户登录"
		})
	}

}