/*
 * @Author: ronin
 * @Date:   2017-06-14 15:58:16
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 17:07:00
 */

'use strict';
import base from "./baseAPI";

export default class api extends base {
	static async ILogin(payload) {
		return await this.fetch(payload)
	}
}