/*
 * @Author: ronin
 * @Date:   2017-06-13 11:54:11
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 17:32:04
 */

'use strict';
const router = require('koa-router')();
const UserController = require("../controller/UserController");


router.get("/getUserInfo", UserController.getUserInfo);
router.post("/login", UserController.login)

module.exports = router;