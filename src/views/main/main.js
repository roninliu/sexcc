/*
 * @Author: ronin
 * @Date:   2017-06-13 15:10:28
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-13 18:26:24
 */

'use strict';
import Vue from "vue";
import Main from "./Main.vue";

new Vue({
	el: "#root",
	render: h => h(Main)
})