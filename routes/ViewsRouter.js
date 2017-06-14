/*
 * @Author: ronin
 * @Date:   2017-06-13 14:12:59
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 11:32:15
 */

'use strict';
const router = require('koa-router')();
const ViewsController = require("../controller/ViewsController");


router.get("/", ViewsController.index);
router.get("login", ViewsController.login);

module.exports = router;