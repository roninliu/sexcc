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
具体实现HTTPServer见代码（因Node8未实现import,服务端未使用import）：

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
- 代码1:
```javascript
....导入相关依赖
const router = require("./routes/router");
//这句代码到作用，后面会说明，主要用于分模块，分实例的路由

.....
```

- 代码2:

```javascript
//实现静态目录，切忌，此处到static代表服务器指定到静态根目录。
//引用文件时：http://yourdomain/css/style.css，这里不需要static
app.use(koaStatic(
	path.resolve(__dirname, "./static")
));

- 代码3:
```javascript

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
	extension: 'html',
	map: {
		html: "handlebars"
	}
}))

```

模板选用handlerbars，以前一直用ejs，“<%%>” 看多了，换一个口味，具体的可以根据自己的熟悉习惯替换，关于配置项：extension: 'html',表示支持那种格式的后缀名， html: "handlebars"表示该类的文件使用那种引擎解析，请先安装 handlerbars

```javascript
npm install handlerbars --save --verbose

```

代码4:

```javascript

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, async() => {
	console.log("[sexcc] start at port 3000")
})

```
注册使用koa-route路由组件， 并启动服务器，使用端口3000，启动完成后控制台输出记录

代码5:

```javascript

app.use(async(ctx, next) => {
	console.log(ctx.method, ctx.url);
	await next();
});

```
刚开始入门时，看到很多例子，都有这个代码，但是没有await next()这句，程序死活进不了下一步，查了下官方文档，了解洋葱模型即可明白，简单说明下，这段代码，该代码的作用类似一个全局观察者，基本上请求都会走到这里，这时如没有next(),程序将会将respones丢出去，进不了下一步，使用next后，先去处理下一步，拿到下一步的返回，这里在组合丢出respones，各位看官是否发现了一个用处？没错，这里可以对数据做一些再次封装，还有logger等操作，具体后面开发时继续完善。



