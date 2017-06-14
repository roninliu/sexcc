/*
 * @Author: ronin
 * @Date:   2017-06-13 15:10:28
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 14:17:27
 */

'use strict';
import Vue from "vue";
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
import Login from "./Login.vue";

Vue.use(iView);

new Vue({
	el: "#root",
	render: h => h(Login)
})