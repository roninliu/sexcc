/*
 * @Author: ronin
 * @Date:   2017-06-13 11:44:23
 * @Last Modified by:   ronin
 * @Last Modified time: 2017-06-14 16:34:19
 */

'use strict';
const Koa = require("koa");
const views = require('koa-views');
const path = require('path');
const koaStatic = require("koa-static");
const router = require("./routes/router");
const app = new Koa();

app.use(koaStatic(
	path.resolve(__dirname, "./static")
));

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
	extension: 'html',
	map: {
		html: "handlebars"
	}
}))

app.use(async(ctx, next) => {
	console.log(ctx.method, ctx.url);
	await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, async() => {
	console.log("[sexcc] start at port 3000")
})