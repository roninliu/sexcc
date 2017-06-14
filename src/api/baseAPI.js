/*
 * @Author: ronin
 * @Date:   2017-06-14 15:53:11
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 17:37:23
 */
'use strict';
import md5 from "md5";
import axios from "axios";
import qs from "qs";


// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = "http://localhost:3000/api";

//POST传参序列化
axios.interceptors.request.use((config) => {
	if (config.method.toLowerCase() === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});
//返回状态判断()
axios.interceptors.response.use((res) => {
	//业务出错，返回业务Data,根据Code处理
	// if (res.data.code !== 0) {
	// 	return Promise.reject(res.data);
	// } else {
	// 	return res.data
	// }
	//业务错误，不处理，直接返回Data
	return res.data;
}, (error) => {
	//服务器出错，无需返回Code直接抛出异常
	console.log(error);
	return Promise.reject(error);
});

export default class {
	/**
	 * [fetch 请求接口API]
	 * @param  {[String]} options.url    [请求地址，是否必须：是]
	 * @param  {[Object]} options.data   [请求参数，是否必须：否]
	 * @param  {[String]} options.method [请求类型，是否必须：否，默认为POST]
	 * @return {[Promise]}               [返回Promise]
	 */
	static async fetch({
		url,
		data,
		method
	}) {
		return await new Promise(async(resolve, reject) => {
			if (!data) {
				data = {};
			}
			try {
				if (!method) {
					let result = await axios.post(url, data);
					resolve(result)
				} else {
					let result = await axios.get(url, data);
					resolve(result)
				}
			} catch (error) {
				reject(error);
			}
		})
	}
}