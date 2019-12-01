## 网络 Network

### 瀑布流

随着网页的加载，每个HTTP请求都会是瀑布流中的一条。第一条都是文件document的加载，当文件被解析，随后通常是CSS文件的加载。和写在HTML文件中的标签中的顺序是一样的。但浏览器会做一些优化，比如会降低图片的优先度，提升CSS文件的优先度等。

在瀑布流下方的表格中，我们可以看到请求的Name，Status，Type等信息。Initiator列的意思是，什么文件需求加载了这一行的文件。按住Shift点击表格的一行，调用该行文件的相应文件会变绿(who called it?)，该行文件调用的相应行会变红(who does it called?)。

### 瀑布流颜色

* 白色 队列中。不常见。HTTP1中，浏览器一次性只能进行6个TCP连接，比如我们有7个CSS文件，那么其中的一个就会在队列中。

* 灰色 一个请求能发送前的各种停滞反应时间。

* 浅灰色 在Proxy代理服务器消耗的时间

* 深绿色 DNS查找的时间

* 橙色 建立连接时间。包括TCP握手时间和建立SSL连接时间。

* 棕色 SSL连接时间

* 绿色 等待回复的时间。也就是等待获得第一个字节的时间。如果绿色很长说明应用服务器很慢。

* 蓝色 下载回复内容的时间。和文件大小有关系。

### 快照

如果我们点击Capture Screenshot按钮，重新加载页面， 就可以看到网页的每次repaint，也就是网页是如何加载的。

使用这个功能，我们可以知道在慢速网络下，网页是如何呈现出来的。

### 过滤信息

Network面板中，我们可以点击文件类型来查看特定类型的文件。左侧有个输入框也可以输入特定条件。比如larger-than:200px，就可以观察大于200px的图片请求。

Disable Cache，Offline，Preserve Log三个按钮的功能是显而易见的。




## 性能 Performance

### 开发者性能VS用户端性能测试

开发者性能测试是在开发环境中做性能测试，但是用户端是在真实用户使用的情况下记录测试数据。以前是这么做的：

```
const start = new Date().getTime();

const end = new Date().getTime();

const time = end - start;

```

这样我们就可以记录下用户作出一个操作的时间，然后将数据post回来。

后来有了[Performance API](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance):

```
performance.mark('start')

performance.mark('end);

performance.measure('Our Measurement,'start','end');

performance.getEntriesByType('measure')
```

### 图片性能

一般图片过大的解决方法：
* resize图片

* 删除图片的meta data

* 在服务器端使用gzip，brotli, zopfli等工具。


还有一个HTML API要知道，[srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)
可以在不同窗口大小的时候加载指定的图片。
```
<img srcset="small.jpg  300w,
              medium.jpg 800w,
              large.jpg 1200w">
```
但是为了浏览器兼容性，我们总是应该给默认的src attribute留一个URL。

### 页面卡顿 Page Jank

#### 为什么看起来卡

现代大多数屏幕刷新率都是60帧每秒。1秒/60 = 16.66毫秒。所以我们的一个画面更新的处理时间如果超过了16毫秒，就感觉卡。

#### 编译时间慢

有一种卡的原因是因为，解析Javascript的时间过长。V8引擎渲染页面的时候，需要编译Javascript，生成AST(Abstract Syntax Tree)。当客户端的处理性能很差的时候，就要等很久。

#### 布局抖动

还有一种卡的原因是因为，Layout thrashing，反复布局，又称布局抖动。
```
//Read
const h1 = element.clientHeight;
//Write
element1.style.height = (h1 * 2) + 'px';
//Read
const h2 = element2.clientHeight;
//Write
element2.sytle.height = (h2 * 2) + 'px';
```
当我们反复进行这种DOM读写操作的时候，就会造成布局抖动。

#### requestAnimationFrame

如果我们可以将读和写完全分开，一次性操作所有读，一次性操作所有写，就不会有这种情况，但是这是不现实的。这就是使用[window.requestAnimationFrame()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)的原因。


简单说requestAnimationFrame将读写操作和屏幕刷新率匹配起来，当浏览器准备好更新下一帧时，做想做的操作，减少性能浪费，避免跳帧。关于这个话题有很多写Event Loop的文章里也有写，这里不多写。

#### 观察页面重绘情况

在开发者工具中，我们在更多工具中可以找到Rendering的选项。

![图片描述][2]

打开这个选项，页面每次repaint的地方都会变成绿色，帮助开发者观察是否一些没必要重绘的地方在不停的被重绘，浪费性能。

### 录制操作和分析 

我们点击录制按钮，在页面上做一些操作，比如Scroll。Performance面板中就会有一些数据。
![图片描述][3]

最下方有一个饼状图是一个概括总结。

展开Main行，X轴代表处理时间，Y轴是Call Stack。Y轴高没关系，只是函数之间不断的调用，但是如果有色块很宽的话就说明处理时间很长。

我们可以使用WASD来操作。按W Zoom In可以看到具体信息。

找到一个很宽的色块，看之前是哪个色块调用了这个色块，然后我们就可以在下方Summary面板中找到具体文件名，点击去Sources面板看代码。

## 内存 Memory

### JS中的内存泄漏

当一些内存没有按开发者的意愿被释放的时候，就出现了内存泄漏。

#### 常见的内存泄漏情况

* 意外添加的全局变量
```
function foo() {
  bar = "Hi"
}
```
当foo被调用的时候，因为bar没有变量声明关键词const， var， let。JS就会一直向上找这个变量到全局作用域，然后会为你创建一个全局变量bar。当这个函数结束的时候，你以为这个bar会被回收，但其实它一直留在全局。设想如果这个bar不是“Hi”而是一个拥有很多元素的array，它留在了全局作用域，这并不是我们想要的情况。

* 没有取消的计时器

顾名思义，计时器没有被取消或移除。

* 多余的DOM元素变量

```
const button = document.getElementById('button);

document.body.removeChild(
  document.getElementById('button)
);
}
```
这里我们在DOM中移除了这个button，但是之前指向这个元素的reference还在，就是变量button。所以这个reference就留在了内存中。

### 发现内存泄漏

打开Chrome的任务管理器，确保Javascript Memory列有显示。我们可以看到每个标签页的内存使用情况。如果有一个标签页的内存使用不稳定，一直在上升，说明出现了内存泄漏。

在Performance面板记录下的数据中，如果我们打勾Memory选项，我们就可以看到Memory行。如果线图不停的上升，就说明出现了内存泄漏。

### 定位内存泄漏

在开发者工具的Memory面板中，我们可以选择Heap Snapshot，记录一个当前页面具体内存使用情况的快照。注意Shallow Size列和Retained Size列。

Shallow Size是对象自身占用内存的大小，而Retained Size是指我们移除Object后能获得多少空间，也就是将对象本身和连同的相关对象一起删除后释放的内存大小。比如一个变量指向一个很大的Object，这个变量本身是个reference很小（Shallow Size很小），但是移除这个变量以后，我们就可以获得很大的空间（Retained Size很大)。

我们可以根据Shallow Size给Heap Snapshot排序，找到占用内存最多的对象，如果不确认是否是内存泄漏，可以再记录一个Heap Snapshot做对比。如果该对象的Shallow Size增长了，说明确实出现了内存泄漏。我们可以根据工具给的提示信息，找到开发代码片段做修改。


## 评估 Audit
现在的Audit面板整合了谷歌的Lighthouse服务。网上还有一些其他不错的第三方服务如webpagetest， sonarwhal。


[2]: ./image1.png
[3]: ./image2.png



官方文档
[Chrome Developer Tool](https://developers.google.com/web/tools/chrome-devtools/)