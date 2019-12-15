# JS模块化历史

JS本身只能通过用script标签引入到HTML中使用。
```
<body>
...
  <script src="XXX></script>
</body>
```
但是这种方法扩展性并不好，并且每一个标签都是一个请求，影响性能。


我们用IIFE来完成JS的模块化。因为闭包的原因，立即执行函数内部的变量不会污染全局。
```
(function(params) {
  return {
    ...
  }
})()
```


后来有了CommonJS，是因为Server端并没有script tag这个东西。那我们怎么把分开的JS文件引入到一起呢？我们就有了`require`和`module.exports`的语法。有了CommonJS以后，大家就开始把库都写成module，大家就都开始用NPM了。但是CommonJS是不能在浏览器中运行的？并且CommonJS本身和网络加载配合起来不太好。

或者用RequireJS这样的AMD模式，把很多文件都define成全局都可以使用的变量


后来有了ES Modules。有了`import`和`export`语法。但是Node上是没办法用ES Modules的。如果直接在浏览器中使用ES Modules，速度是非常慢的。

grunt和gulp是任务执行工具
- 给css属性添加前缀(-webkit-, -moz-)
- 把SASS转换成CSS
- minify JS/CSS文件
- 打包分开的文件

后来就有了Webpack。

# Wepack Config

- Entry
- Output
- Loaders + Rules


module: {
  rules: [
    {
      test: regex,
      use,
      include,
      exclude,
      issuer,
      enforce
    }
  ]
}
