/*
 * @Author: ronin
 * @Date:   2017-06-13 11:52:04
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 11:31:02
 */

'use strict';
const router = require("koa-router")();
const viewsRouter = require("./ViewsRouter");
const userRouter = require("./UserRouter");

router.use("/", viewsRouter.routes(), viewsRouter.allowedMethods());
router.use('/api/user', userRouter.routes(), userRouter.allowedMethods())

module.exports = router;