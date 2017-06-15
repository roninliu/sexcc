/*
 * @Author: ronin
 * @Date:   2017-06-13 11:54:11
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-15 15:04:05
 */

'use strict';
const router = require('koa-router')();
const UserController = require("../controller/UserController");

router.post("/login", UserController.login)

module.exports = router;