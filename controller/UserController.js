/*
 * @Author: ronin
 * @Date:   2017-06-13 11:57:30
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 17:32:44
 */

'use strict';
module.exports = {
	async getUserInfo(ctx) {
		ctx.body = {
			name: "ronon"
		}
	},
	async login(ctx) {
		ctx.body = {
			code: 1000,
			data: {
				name: '1111'
			}
		}
	}
}