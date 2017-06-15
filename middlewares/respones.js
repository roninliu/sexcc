/*
 * @Author: ronin
 * @Date:   2017-06-15 15:49:10
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-15 16:47:07
 */

'use strict';
module.exports = async(ctx, next) => {
	ctx.fail = ({
		code = 1000,
		data = {},
		msg = "UNKOWNERROR",
		notic = ""
	}) => {
		ctx.body = {
			code,
			msg,
			data,
			notic
		}
	}
	ctx.success = ({
		code = 0,
		data = {},
		msg = "SUCCESSFUL",
		notic = ""
	}) => {
		ctx.body = {
			code,
			msg,
			data,
			notic
		}
	}
	await next()
}