# KOA2,前后端分离项目，入门到填（Fang）坑（qi）记录

------
文章内容包含：
1. 采用KOA2，作为服务器，实现页面渲染，API服务接口
2. 前端采用VUE作为VM框架，未使用SPA模式，用于多页面
3. 采用Webpack打包，实现javascript，css，图片，字体自定义打包，输出到指定目录
4. ES6编写VUE单文件组件

-----
## 第一步：服务器搭建
KOA2相关说明文档可以直接查阅koa的官方文档，度娘，谷哥也比较多，就不阐述了。
具体实现HTTPServer见代码（见代码注释，因Node8未实现import,服务端未使用import）：

```javascript
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

```

说明：
```javascript
。。。导入相关依赖
const router = require("./routes/router");
这句代码到作用，后面会说明，主要用于分模块，分实例的路由

````
