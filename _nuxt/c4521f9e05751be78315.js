(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(n){n.exports=JSON.parse('{"full-stack-common-sense-part1":{"createdAt":"2019/11/26","fileName":"full-stack-common-sense-part1","title":"想写自己的全栈小项目一定要知道的常识 part1"},"we-app-video":{"createdAt":"2019/11/15","fileName":"we-app-video","title":"小程序视频组件的使用"},"throttle-and-debounce":{"createdAt":"2019/6/28","fileName":"throttle-and-debounce","title":"理解节流与防抖"},"learn-chrome-dev-tool-part2":{"createdAt":"2019/6/27","fileName":"learn-chrome-dev-tool-part2","title":"chrome dev tool常识整理 网络，性能与内存篇"},"learn-chrome-dev-tool-part1":{"createdAt":"2019/6/26","fileName":"learn-chrome-dev-tool-part1","title":"chrome dev tool常识整理 页面元素信息篇"},"review-es6+":{"createdAt":"2019/6/25","fileName":"review-es6+","title":"划一下es6以后的重点常识"}}')},153:function(n,e){n.exports='<h2 id="教育经历">教育经历</h2>\n<h3 id="201508---201906-本科-indiana-university-bloomington">2015.08 - 2019.06 本科 Indiana University Bloomington</h3>\n<ul>\n<li>计算机科学-编译原理系（Programming Language）</li>\n</ul>\n<h2 id="校内经历">校内经历</h2>\n<h3 id="201603---201906-中国留学生学生会-it部负责人">2016.03 - 2019.06 中国留学生学生会 IT部负责人</h3>\n<ul>\n<li>负责维护学生会官网</li>\n<li>制作学生会的微信小程序，实现报名表格，投票，抽奖等功能</li>\n<li>后端使用的是微信云开发数据库</li>\n</ul>\n<h2 id="工作经历">工作经历</h2>\n<h3 id="201907---201911-必连（北京）科技有限公司-前端开发工程师">2019.07 - 2019.11 必连（北京）科技有限公司 前端开发工程师</h3>\n<ul>\n<li>参与开发第三方平台小程序Nicelook.com(Typescript+LeanCloud后端)。项目主旨是帮助自由职业者简单创建自己个性化的小程序。负责和UI设计合作实现了web端的手机界面预览原型，可以满足切换机型和拖拽。</li>\n<li>在小程序端实现了登录，留言板等功能控件。在开发图片瀑布流控件时，自己用绝对定位实现了RecycleView长列表效果的性能优化。</li>\n<li>自己从零实现了开发团队使用的CMS（Vue全家桶+ElementUI+LeanCloud)，帮助前后台合作。使开发人员可以在界面上配置和填写代码片段，直接作用到前台项目。</li>\n</ul>\n<h3 id="201706-201708无锡环球教育-托福助教">2017.06-2017.08无锡环球教育 托福助教</h3>\n<ul>\n<li>帮助托福考生准备考试，制定学习计划，和考生家长沟通孩子的学习情况。</li>\n<li>负责监督考生自习，帮助抽查单词背诵情况和理解阅读疑难问题。</li>\n</ul>\n<h2 id="个人技能">个人技能</h2>\n<ul>\n<li>熟练掌握前端原生技术HTML，CSS，JavascriptES6+，ChromeDevTool。</li>\n<li>熟练掌握现代前端开发工具NPM,Webpack的基本用法。</li>\n<li>一年半使用Vue框架的经验，理解Vue底层的响应式原理和常用功能的最佳实践，如表单校验，页面路由，状态管理，国际化等。</li>\n<li>面向对象思想和强类型语言基础扎实，在最近的工作项目中迅速掌握Typescript。</li>\n<li>能非常流畅地阅读英文技术文档。</li>\n</ul>\n<h2 id="自我评价">自我评价</h2>\n<ul>\n<li>热爱Javascript以及前端技术，喜欢亲手写出好看的网站和应用。对设计模式和代码可读性有追求。时刻保持对国内外前端生态环境的关注。有良好的沟通和团队协作能力，面对新技术能快速学习并且能结合业务代码实际情况使用。对科技，音乐，和互联网行业有浓烈的兴趣。</li>\n</ul>\n'},155:function(n,e,t){var content=t(177);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(35).default)("33723337",content,!0,{sourceMap:!1})},166:function(n,e,t){var map={"./full-stack-common-sense-part1/full-stack-common-sense-part1.md":167,"./learn-chrome-dev-tool-part1/learn-chrome-dev-tool-part1.md":168,"./learn-chrome-dev-tool-part2/learn-chrome-dev-tool-part2.md":170,"./resume/resume.md":153,"./review-es6+/review-es6+.md":173,"./throttle-and-debounce/throttle-and-debounce.md":174,"./we-app-video/we-app-video.md":175};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=166},167:function(n,e){n.exports='<h2 id="command-line">Command Line</h2>\n<p>除了我们常用的几个命令行 cd, ls, rm, pwd, mkdir, rmdir， touch, ping\n还有一些必须知道的。</p>\n<ul>\n<li>cat 查看文件内容</li>\n<li>less 分页查看文件内容</li>\n<li>man 命令行说明书</li>\n<li>rm 删除文件</li>\n<li>echo 打印</li>\n<li>kill 结束进程 默认参数为-15</li>\n<li>kill -9 强制结束</li>\n<li>pkill 根据应用名结束进程</li>\n<li>ps -ef | grep <code>&lt;processname&gt;</code> 用进程名做关键词搜索展示进程信息</li>\n<li>sudo !! 用super user权限执行上一个指令</li>\n</ul>\n<p>explain shell</p>\n<h3 id="standard-stream">Standard Stream</h3>\n<p>常用的std redirection符号，|, &gt;, &gt;&gt;, &lt; , 2&gt;</p>\n<h3 id="find">find</h3>\n<p>find / -type d -name log  查找名字为log的文件夹</p>\n<h2 id="shell">Shell</h2>\n<p>Shell 是我们使用 Command Line 的地方\nMac 的 Terminal 是一个运行 Shell 的应用， 并不是 Shell。\n<code>echo $0</code>\n可以查看目前在运行哪种 Shell</p>\n<h2 id="vim">Vim</h2>\n<p>3 种模式</p>\n<ol>\n<li>insert mode <code>i</code></li>\n<li>command mode <code>ESC</code></li>\n<li>last line mode <code>:</code></li>\n</ol>\n<p>最重要的： 什么都不做并关掉 Vim <code>ESC :q!</code>\n其他可以看 cheet sheet（微笑）。</p>\n<h2 id="server">Server</h2>\n<ul>\n<li>adduser 增加用户</li>\n<li>usermod -aG sudo <code>&lt;username&gt;</code> 将用户增加到super user group</li>\n<li>su <code>&lt;username&gt;</code> 切换用户</li>\n<li>sudo cat /var/log/auth.log 查看Server的登陆记录</li>\n<li>tail -f 实时查看一个文件的内容情况</li>\n<li>ls -a 展示隐藏文件（前缀为.）</li>\n<li>sudo service sshd restart 重启ssh服务</li>\n</ul>\n<h3 id="关闭root登录权限">关闭root登录权限</h3>\n<p>sudo vi /etc/ssh/sshd_config</p>\n<p>最简单的 nodejs http server</p>\n<pre><code>const http = require(&#39;http);\nhttp.createServer(function(req, res) {\n  res.write(&#39;Hello, World!&#39;);\n  res.end();\n}).listen(8080);\nconsole.log(&#39;Server started! Listening on port 8080&#39;);</code></pre><h2 id="ssh">SSH</h2>\n<p>客户端持有私钥， 公钥存在服务端。\n在Home路径的/.ssh文件夹中<code>ssh-keygen</code>就可以创建一个sshkey。\n有两个文件，.pub后缀的是公钥，另一个是私钥。</p>\n<h2 id="ufw">ufw</h2>\n<ul>\n<li>ufw enable 开启端口防火墙</li>\n<li>ufw allow ssh 允许ssh端口正常使用</li>\n<li>ufw reject http 拒绝http请求并返回拒绝信息</li>\n</ul>\n<h2 id="nginx">Nginx</h2>\n<p>Server本身不响应reqeust。有了Web Server比如Apache， Nginx的Server才能响应request。</p>\n<ul>\n<li>sudo apt install nginx 安装</li>\n<li>sudo service nginx start 启动</li>\n</ul>\n<p>现在Server会响应（80端口）http请求了。</p>\n<p>所有请求前往的默认根目录为\n/var/www/html</p>\n<ul>\n<li>sudo less /etc/nginx/sites-available/default 查看nginx默认配置</li>\n</ul>\n<pre><code>location / {\n  proxy_paas http://127.0.0.1:XXXX/; //请求转端口\n  return 302 htts://XXXX  // 临时重定向\n}\n\nlisten 443 http2 ssl; // 使用http2</code></pre><p>Nginx默认打开gzip， 图片不会被压缩，因为图片本身就被压缩过了。\ngzip设置在nginx.conf</p>\n<h2 id="process-manager">Process Manager</h2>\n<p>让进程在Server启动的时候就开始运行</p>\n<ul>\n<li>sudo npm i -g pm2 安装PM2</li>\n<li>pm2 start app.js 启动PM2</li>\n<li>pm2 startup 让PM2在server启动时启动</li>\n</ul>\n'},168:function(n,e,t){n.exports='<h1 id="简单复习各个面板">简单复习各个面板</h1>\n<h3 id="elements">Elements</h3>\n<p>浏览DOM树，浏览样式。</p>\n<h3 id="console">Console</h3>\n<p>一个REPL。</p>\n<p>小技巧： 在任何非Console面板中，按ESC可以调出一个小的Console窗口，方便开发者Debug。</p>\n<h3 id="sources">Sources</h3>\n<p>类似一个文本编辑器。右边有一个Debugger，我们可以用它来Debug，可以做比console.log更复杂的事。</p>\n<h3 id="network">Network</h3>\n<p>显示请求瀑布流。</p>\n<h3 id="performance">Performance</h3>\n<p>我们可以Record一些操作，然后在这个面板中查看一些信息。</p>\n<h3 id="memory">Memory</h3>\n<p>查看页面的内存占用具体情况，可以定位内存泄漏原因。</p>\n<h3 id="application">Application</h3>\n<p>显示各种浏览器储存情况，比如local storage， Session Storage，cookie。 查看网站储存了用户的哪些信息。</p>\n<h3 id="security">Security</h3>\n<p>查看安全证书，连接是否安全。</p>\n<h3 id="audits">Audits</h3>\n<p>网站性能的总结，整合了google自家的Lighthouse功能。基于平均水平的网络速度和设备性能作出的评估。</p>\n<h1 id="深入各个面板">深入各个面板</h1>\n<h2 id="编辑-editing">编辑 Editing</h2>\n<h3 id="元素和样式">元素和样式</h3>\n<p>我们可以点击Elements面板中的HTML文本，做更改，也可以点击CSS属性，做更改。</p>\n<p>在Elements面板，按住option点击展开一个元素节点的箭头会展开当前节点下的所有子节点。</p>\n<p>在Elements面板，我们长按一个节点可以移动该节点在DOM树中的位置。</p>\n<p>右键一个DOM节点，选择Scroll into view，可以迅速找到页面中节点的位置。</p>\n<p>选择一个DOM节点，按“H”隐藏这个节点，调整的是visibility属性。如果visibilty在CSS中被标记了!important则不能被隐藏。按“delete”删除这个节点，ctrl+z撤销删除。</p>\n<p>在Style面板中，我们按住Shift点击一个颜色块，我们可以更改颜色的表达格式，在HEX，RGB，HSL间切换。</p>\n<p>在Style面板中，我们可以左键点击一个颜色块，调出调色板。这个调色板有一个最大的好处就是里面总是保存了Material Design的配色,方便了开发者选择颜色。</p>\n<p><img src="'+t(169)+'" alt=""></p>\n<p>在DOM树中选择一个节点，在右边样式面板中点击:hov，可以选择强制触发各种鼠标事件，方便开发者检查触发事件时的CSS属性。</p>\n<h3 id="元素节点">元素节点</h3>\n<p>有的时候我们会发现一个元素节点有好几个CSS选择器，比如浏览器有默认样式，你自己写了一个样式，你又用了一个CSS库比如Bootstrap加了另一个样式。我们可以点击Computed面板，来检查最后有用的样式是哪些。</p>\n<p>在Event Listeners面板中，我们可以观察该节点的所有事件。如果我们点击旁边的JS文件名，会跳转到Source面板展示事件处理函数的实现代码。</p>\n<p>当Source面板中的代码格式是被压缩过的时候，我们点击左下角的大括号{}“Pretty Print”按钮，可以美化代码样式。</p>\n<p>DOM断点。右键点击一个元素节点，选择Break On。我们有三种Debug的选择，为什么这个节点被删除(node removal)，为什么这个节点的某种属性发生了变化(attribute modification)，或者为什么这个节点的子节点发生了变化(subtree modification)。当代码触发断点的时候，Sources面板会自动打开，展示引发节点变化的具体代码。</p>\n<h3 id="更改本地文件">更改本地文件</h3>\n<p>在Sources面板中，选择Filesystem面板，我们可以打开本地的workspace。然后我们再前往Elements面板中调试CSS样式，会发现一些CSS文件图标被标上了绿色圆点，这就表示现在我们在Devtool做的调试，本地的文件也会被更改，Sass也有用，但是使用webpack的项目不一定支持这个功能。</p>\n<p>但是在Elements面板左边的DOM树中做更改，不会改变本地的HTML文件。因为DOM树只是浏览器根据我们写的HTML生成的，并没有直接更改HTML文件的能力。如果我们想要更改HTML和JS文件，我们可以在Sources面板中做到，就像使用文本编辑器一样。</p>\n<h3 id="选择元素历史">选择元素历史</h3>\n<p>在Elements面板中左键点击选择一个节点，然后进入Console面板，输入:</p>\n<pre><code>$0</code></pre><p>就会返回刚才最近选择的一个节点。以此类推，$1会返回第二近选择的一个节点。</p>\n<p>说到$符号，Console里也可以使用类似Jquery的$选择器,输入$,按回车，就会返回Jquery选择器函数。</p>\n<h2 id="调试-debug">调试 Debug</h2>\n<p>小技巧：在开发者工具的任意面板按ctrl+shift+P，我们可以打开一个命令行，里面有很多常用Dev Tool操作。方便开发者少用鼠标。而在Sources面板中ctrl+P是打开具体文件。</p>\n<h3 id="断点">断点</h3>\n<p>在Sources面板中打开一个JS文件，我们可以在代码中加入</p>\n<pre><code>debugger;</code></pre><p>来打断点。我们还可以直接点击代码行数来打断点，行数会变蓝。当代码运行到断点的时候，我们会在调试操作面板中看到“Paused on breakpoint“的提示。<strong>注意断点是在该行代码执行前断而不是之后。</strong></p>\n<p>除了常见的Step over, Step into功能按钮，我们还有一些其他面板。</p>\n<ul>\n<li><p>Watch 我们可以在Watch中添加任何变量。可以观察该变量在当前断点的作用域中是defined还是undefined。</p>\n</li>\n<li><p>Call Stack 顾名思义，观察这个断点发生之前，被调用过的函数。</p>\n</li>\n<li><p>Scope 观察当前作用域中我们所有可以调用的变量。如果知道要具体看哪个变量还是用Watch比较方便。</p>\n</li>\n<li><p>Breakpoints 告诉我们目前可用的断点。我们可以取消打勾来取消断点。</p>\n</li>\n<li><p>XHR/fetch Breakpoint 加入自定义请求断点，在特定URL请求发生的时候打断。然后可以在Call Stack面板中找到涉及到这个请求的代码文件。</p>\n</li>\n</ul>\n<h3 id="blackbox功能">Blackbox功能</h3>\n<p>当我们使用很多库的时候，比如React，d3.js。如果我们在调试面板中看到了一些文件名属于第三方库，我们可以右键点击然后Blackbox它。意思是我们不需要看到第三方库的代码运行过程。在开发者工具的setting中，我们可以设置永久Blackbox名单。</p>\n<h3 id="条件性断点">条件性断点</h3>\n<p>当一个函数被经常调用，但是只在特定情况下出错的时候。我们可以使用条件性断点。比如我们只想要在ajax函数被传入特定参数的时候才打断，而不是所有ajax call都打断让我们看。我们可以右键点击一个行数，选择Conditional Breakpoint然后我们可以输入参数条件。这种断点，行数会变成黄色。</p>\n<p>官方文档\n<a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome Developer Tool</a></p>\n'},169:function(n,e,t){n.exports=t.p+"img/f34ff82.png"},170:function(n,e,t){n.exports='<h2 id="网络-network">网络 Network</h2>\n<h3 id="瀑布流">瀑布流</h3>\n<p>随着网页的加载，每个HTTP请求都会是瀑布流中的一条。第一条都是文件document的加载，当文件被解析，随后通常是CSS文件的加载。和写在HTML文件中的标签中的顺序是一样的。但浏览器会做一些优化，比如会降低图片的优先度，提升CSS文件的优先度等。</p>\n<p>在瀑布流下方的表格中，我们可以看到请求的Name，Status，Type等信息。Initiator列的意思是，什么文件需求加载了这一行的文件。按住Shift点击表格的一行，调用该行文件的相应文件会变绿(who called it?)，该行文件调用的相应行会变红(who does it called?)。</p>\n<h3 id="瀑布流颜色">瀑布流颜色</h3>\n<ul>\n<li><p>白色 队列中。不常见。HTTP1中，浏览器一次性只能进行6个TCP连接，比如我们有7个CSS文件，那么其中的一个就会在队列中。</p>\n</li>\n<li><p>灰色 一个请求能发送前的各种停滞反应时间。</p>\n</li>\n<li><p>浅灰色 在Proxy代理服务器消耗的时间</p>\n</li>\n<li><p>深绿色 DNS查找的时间</p>\n</li>\n<li><p>橙色 建立连接时间。包括TCP握手时间和建立SSL连接时间。</p>\n</li>\n<li><p>棕色 SSL连接时间</p>\n</li>\n<li><p>绿色 等待回复的时间。也就是等待获得第一个字节的时间。如果绿色很长说明应用服务器很慢。</p>\n</li>\n<li><p>蓝色 下载回复内容的时间。和文件大小有关系。</p>\n</li>\n</ul>\n<h3 id="快照">快照</h3>\n<p>如果我们点击Capture Screenshot按钮，重新加载页面， 就可以看到网页的每次repaint，也就是网页是如何加载的。</p>\n<p>使用这个功能，我们可以知道在慢速网络下，网页是如何呈现出来的。</p>\n<h3 id="过滤信息">过滤信息</h3>\n<p>Network面板中，我们可以点击文件类型来查看特定类型的文件。左侧有个输入框也可以输入特定条件。比如larger-than:200px，就可以观察大于200px的图片请求。</p>\n<p>Disable Cache，Offline，Preserve Log三个按钮的功能是显而易见的。</p>\n<h2 id="性能-performance">性能 Performance</h2>\n<h3 id="开发者性能vs用户端性能测试">开发者性能VS用户端性能测试</h3>\n<p>开发者性能测试是在开发环境中做性能测试，但是用户端是在真实用户使用的情况下记录测试数据。以前是这么做的：</p>\n<pre><code>const start = new Date().getTime();\n\nconst end = new Date().getTime();\n\nconst time = end - start;\n</code></pre><p>这样我们就可以记录下用户作出一个操作的时间，然后将数据post回来。</p>\n<p>后来有了<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance">Performance API</a>:</p>\n<pre><code>performance.mark(&#39;start&#39;)\n\nperformance.mark(&#39;end);\n\nperformance.measure(&#39;Our Measurement,&#39;start&#39;,&#39;end&#39;);\n\nperformance.getEntriesByType(&#39;measure&#39;)</code></pre><h3 id="图片性能">图片性能</h3>\n<p>一般图片过大的解决方法：</p>\n<ul>\n<li><p>resize图片</p>\n</li>\n<li><p>删除图片的meta data</p>\n</li>\n<li><p>在服务器端使用gzip，brotli, zopfli等工具。</p>\n</li>\n</ul>\n<p>还有一个HTML API要知道，<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset">srcset</a>\n可以在不同窗口大小的时候加载指定的图片。</p>\n<pre><code>&lt;img srcset=&quot;small.jpg  300w,\n              medium.jpg 800w,\n              large.jpg 1200w&quot;&gt;</code></pre><p>但是为了浏览器兼容性，我们总是应该给默认的src attribute留一个URL。</p>\n<h3 id="页面卡顿-page-jank">页面卡顿 Page Jank</h3>\n<h4 id="为什么看起来卡">为什么看起来卡</h4>\n<p>现代大多数屏幕刷新率都是60帧每秒。1秒/60 = 16.66毫秒。所以我们的一个画面更新的处理时间如果超过了16毫秒，就感觉卡。</p>\n<h4 id="编译时间慢">编译时间慢</h4>\n<p>有一种卡的原因是因为，解析Javascript的时间过长。V8引擎渲染页面的时候，需要编译Javascript，生成AST(Abstract Syntax Tree)。当客户端的处理性能很差的时候，就要等很久。</p>\n<h4 id="布局抖动">布局抖动</h4>\n<p>还有一种卡的原因是因为，Layout thrashing，反复布局，又称布局抖动。</p>\n<pre><code>//Read\nconst h1 = element.clientHeight;\n//Write\nelement1.style.height = (h1 * 2) + &#39;px&#39;;\n//Read\nconst h2 = element2.clientHeight;\n//Write\nelement2.sytle.height = (h2 * 2) + &#39;px&#39;;</code></pre><p>当我们反复进行这种DOM读写操作的时候，就会造成布局抖动。</p>\n<h4 id="requestanimationframe">requestAnimationFrame</h4>\n<p>如果我们可以将读和写完全分开，一次性操作所有读，一次性操作所有写，就不会有这种情况，但是这是不现实的。这就是使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame">window.requestAnimationFrame()</a>的原因。</p>\n<p>简单说requestAnimationFrame将读写操作和屏幕刷新率匹配起来，当浏览器准备好更新下一帧时，做想做的操作，减少性能浪费，避免跳帧。关于这个话题有很多写Event Loop的文章里也有写，这里不多写。</p>\n<h4 id="观察页面重绘情况">观察页面重绘情况</h4>\n<p>在开发者工具中，我们在更多工具中可以找到Rendering的选项。</p>\n<p><img src="'+t(171)+'" alt="图片描述"></p>\n<p>打开这个选项，页面每次repaint的地方都会变成绿色，帮助开发者观察是否一些没必要重绘的地方在不停的被重绘，浪费性能。</p>\n<h3 id="录制操作和分析">录制操作和分析</h3>\n<p>我们点击录制按钮，在页面上做一些操作，比如Scroll。Performance面板中就会有一些数据。\n<img src="'+t(172)+'" alt="图片描述"></p>\n<p>最下方有一个饼状图是一个概括总结。</p>\n<p>展开Main行，X轴代表处理时间，Y轴是Call Stack。Y轴高没关系，只是函数之间不断的调用，但是如果有色块很宽的话就说明处理时间很长。</p>\n<p>我们可以使用WASD来操作。按W Zoom In可以看到具体信息。</p>\n<p>找到一个很宽的色块，看之前是哪个色块调用了这个色块，然后我们就可以在下方Summary面板中找到具体文件名，点击去Sources面板看代码。</p>\n<h2 id="内存-memory">内存 Memory</h2>\n<h3 id="js中的内存泄漏">JS中的内存泄漏</h3>\n<p>当一些内存没有按开发者的意愿被释放的时候，就出现了内存泄漏。</p>\n<h4 id="常见的内存泄漏情况">常见的内存泄漏情况</h4>\n<ul>\n<li><p>意外添加的全局变量</p>\n<pre><code>function foo() {\nbar = &quot;Hi&quot;\n}</code></pre><p>当foo被调用的时候，因为bar没有变量声明关键词const， var， let。JS就会一直向上找这个变量到全局作用域，然后会为你创建一个全局变量bar。当这个函数结束的时候，你以为这个bar会被回收，但其实它一直留在全局。设想如果这个bar不是“Hi”而是一个拥有很多元素的array，它留在了全局作用域，这并不是我们想要的情况。</p>\n</li>\n<li><p>没有取消的计时器</p>\n</li>\n</ul>\n<p>顾名思义，计时器没有被取消或移除。</p>\n<ul>\n<li>多余的DOM元素变量</li>\n</ul>\n<pre><code>const button = document.getElementById(&#39;button);\n\ndocument.body.removeChild(\n  document.getElementById(&#39;button)\n);\n}</code></pre><p>这里我们在DOM中移除了这个button，但是之前指向这个元素的reference还在，就是变量button。所以这个reference就留在了内存中。</p>\n<h3 id="发现内存泄漏">发现内存泄漏</h3>\n<p>打开Chrome的任务管理器，确保Javascript Memory列有显示。我们可以看到每个标签页的内存使用情况。如果有一个标签页的内存使用不稳定，一直在上升，说明出现了内存泄漏。</p>\n<p>在Performance面板记录下的数据中，如果我们打勾Memory选项，我们就可以看到Memory行。如果线图不停的上升，就说明出现了内存泄漏。</p>\n<h3 id="定位内存泄漏">定位内存泄漏</h3>\n<p>在开发者工具的Memory面板中，我们可以选择Heap Snapshot，记录一个当前页面具体内存使用情况的快照。注意Shallow Size列和Retained Size列。</p>\n<p>Shallow Size是对象自身占用内存的大小，而Retained Size是指我们移除Object后能获得多少空间，也就是将对象本身和连同的相关对象一起删除后释放的内存大小。比如一个变量指向一个很大的Object，这个变量本身是个reference很小（Shallow Size很小），但是移除这个变量以后，我们就可以获得很大的空间（Retained Size很大)。</p>\n<p>我们可以根据Shallow Size给Heap Snapshot排序，找到占用内存最多的对象，如果不确认是否是内存泄漏，可以再记录一个Heap Snapshot做对比。如果该对象的Shallow Size增长了，说明确实出现了内存泄漏。我们可以根据工具给的提示信息，找到开发代码片段做修改。</p>\n<h2 id="评估-audit">评估 Audit</h2>\n<p>现在的Audit面板整合了谷歌的Lighthouse服务。网上还有一些其他不错的第三方服务如webpagetest， sonarwhal。</p>\n<p>官方文档\n<a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome Developer Tool</a></p>\n'},171:function(n,e,t){n.exports=t.p+"img/2c43c7a.png"},172:function(n,e,t){n.exports=t.p+"img/71c8731.png"},173:function(n,e){n.exports='<h2 id="string">String</h2>\n<h3 id="template-strings">Template Strings</h3>\n<p>连接String更方便直观。使用反引号包括要生成的String，使用<code>${}</code>包括具体变量。</p>\n<pre><code>var name = &quot;Yixuan&quot;;\nvar email = &quot;yixuan124@gmail.com&quot;;\nvar title = &quot;Student&quot;;\n\n//以前\nvar msg = &quot;Welcome! Your &quot; +\n    title + &quot; is &quot; + name + &quot;, contact: &quot; +\n    email + &quot;.&quot;;\n\n//现在\n\nvar msg = `Welcome! Your ${title} is ${name}, contact: ${email}.`\n\n//Welcome! Your name is Yixuan, contact: yixuan124@gmail.com.</code></pre><h3 id="tagged-templates">Tagged Templates</h3>\n<p>在模版字符串前调用自定函数，来定制模版字符串的解析方式。这个函数的第一个函数包含一个字符串值的数组，其余的参数是一系列的$表达式的引用变量，可以用...操作来把这些参数当成一个数组。</p>\n<p>这个例子中我们的自定函数formatCurrency将字符串中的数字加上了$符号并保留两位小数。</p>\n<pre><code>var amount = 4.2;\nvar msg = formatCurrency`The total for your order is ${amount}.`\n\nfunction formatCurrency(strings, ...values) {\n  var str = &quot;&quot;;\n  //console.log(strings);\n  for (let i = 0; i &lt; strings.length; i++) {\n    str += strings[i];\n\n    if( i &lt; values.length){\n      console.log(typeof values[i]);\n      if(typeof values[i] == &quot;number&quot;) {\n        str += `$${values[i].toFixed(2)}`;\n      }else {\n        str += values[i];\n      }\n    }\n  }\n  return str;\n}\n\nconsole.log(msg);\n//The total for your order is $12.30.</code></pre><h3 id="string-padding--string-trimming">String Padding &amp; String Trimming</h3>\n<p>JS标准库中现在自带给字符串两边加内容和删减空格的方法。</p>\n<p>padStart给字符串左边加内容，padEnd给字符串右边加内容。</p>\n<pre><code>var str = &quot;Hello&quot;;\n\nstr.padStart(5); // &quot;Hello&quot;\nstr.padStart(8) // &quot;   Hello&quot;\nstr.padStart(8, &quot;*&quot;); // &quot;***Hello&quot;\nstr.padStart(8, &quot;12345&quot;); // &quot;123Hello&quot;\nstr.padStart(8, &quot;ab&quot;); // abaHello&quot;\n\nstr.padEnd(8) // &quot;Hello   &quot;\nstr.padEnd(8, &quot;*&quot;) // &quot;Hello***&quot;\nstr.padEnd(8, &quot;ab&quot;); // &quot;Helloaba&quot;\n</code></pre><p>trimStart去除左边空格， trimEnd去除右边空格。</p>\n<pre><code>var str = &quot;   some stuff \\t\\t&quot;;\n\nstr.trim(); // &quot;some stuff&quot;\nstr.trimStart(); // &quot;some stuff      &quot;\nstr.trimEnd(); // &quot;   some stuff&quot;</code></pre><h2 id="destructuring">Destructuring</h2>\n<p>有时我们get到了一个很大的JSON对象，我们需要把里面的一些值分配到变量当中。解构让这个操作更方便。</p>\n<p>看一个例子。</p>\n<pre><code>var tmp = getSomeRecords();\n//tmp是一个拥有两个对象的数组。\n\n//以前\n\nvar first = tmp[0];\nvar second = tmp[1];\n\nvar firstName  = first.name;\nvar firstEmail = first.email !== undefined ? first.email : &quot;no email&quot;;\n\nvar secondName = second.name;\nvar secondEmail = second.email !== undefined ? first.email : &quot;no email&quot;;\n\n//现在\n\nvar [\n  {// 创建一个叫做firstName的变量，值是数组中第一个对象中name键的值。\n\n    name: firstName,\n\n    // 创建一个叫做firstEmail的变量，值是数组中第一个对象中email键的值,如果没有这个键则使用默认值“no email&quot;。\n\n    email: firstEmail = &quot;no email&quot;\n\n  },\n  {\n    name: secondName,\n    email: secondEmail = &quot;no email&quot;\n  }\n] = tmp;</code></pre><p>注意在这个例子中，赋值等号左边的[],这个中括号不代表数组，而代表一种解构赋值的pattern模式。还有要注意的是像上面这个例子的email的默认值只会在检测到undefined的时候才会被使用，如果值是null，不会触发使用默认值。</p>\n<p>看一个更简单的例子。</p>\n<pre><code>function data(){\n  return [1,2,3];\n}\n// 以前\nvar tmp = data();\nvar first = tmp[0];\nvar second = tmp[1];\nvar third = tmp[2];\n\n//现在\n\nvar [\n    first,\n    second,\n    third\n    ] = data();</code></pre><p>如果左边的变量比右边的值多，多余的变量的值就会是undefined。如果左边的变量比右边的值少，多余的值会被忽略。</p>\n<p>如果我们要在一个变量里多赋几个值呢？</p>\n<pre><code>data = [1,2,3,4,5];\n\nvar [\n  first,\n  second,\n  third,\n  ...fourth\n] = data;\n\n//这里fourth是[4,5];</code></pre><p>如果值不够</p>\n<pre><code>data  =[1,2,3];\nvar [\n  first,\n  second,\n  third,\n  ...fourth\n] = data;\n\n//这里fourth是空数组[];</code></pre><p>有的时候我们需要交换变量的值，用解构也更方便。</p>\n<pre><code>var x = 10;\nvar y = 20;\n\n//以前\nvar tmp = x;\nx = y;\ny = tmp;\n\n//现在\n]\n[y,x] = [x,y];</code></pre><p>有的时候我们将一个数组传入函数的时候，我们只需要它的前三个元素，我们也可以使用解构，在函数参数声明的时候就做到这步。</p>\n<pre><code>function data([\n  first,\n  second,\n  third\n]) {\n}</code></pre><p>解构赋值如果出现赋值错误，和普通赋值一样，也会报错。</p>\n<pre><code>var data = null;\n\nvar [first, second] = data;\n\n//TypeError\n\nfunction foo([first,second])\n} {\n  ...\n}\n\nfoo(data);//传入null\n\n//TypeError</code></pre><p>这个时候我们需要Graceful Fallback（降级，向下兼容）</p>\n<pre><code>var data = null;\nvar [first, second] = data || [];\n\n//不报错\n\nfunction foo([first,second] = [])\n} {\n  ...\n}\n//不报错</code></pre><p>嵌套解构</p>\n<pre><code>var data = [1,[2,3],4];\n\nvar [\n  first,\n  [\n    second,\n    third\n  ],\n  fourth\n] = data;</code></pre><h2 id="object-destructuring">Object Destructuring</h2>\n<p>有的时候我们有一个默认的对象，但是我们需要根据一个新传过来的对象，来创建一个新对象。举个例子，我们知道的表单信心有name,wechat,phone,gender等属性（键名），但是有时表单会有新的属性。这是我们可以用解构赋值来很好的创建出一个新对象，来传到后端或传到数据库。</p>\n<pre><code>\nfunction makeObject({\n  name = &quot;default name&quot;,\n  wechat = &quot;default wechat&quot;,\n  phone = &quot;default phone&quot;,\n  gender = &quot;none&quot;,\n  ...otherProps\n} = {}) {\n  return {\n    name, \n    wechat, \n    phone, \n    gender,\n    ...otherProps\n  }\n}\n\nconst obj = {\n  name: &quot;wyx&quot;,\n  wechat: &quot;weixin&quot;,\n  gender: &quot;male&quot;,\n  age:&quot;22&quot;,\n  year:&quot;2019&quot;\n}\n\nconst newObj = makeObject(obj);\nconsole.log(newObj);\n/*\n{ name: &#39;wyx&#39;,\n  wechat: &#39;weixin&#39;,\n  phone: &#39;default phone&#39;,//没有的属性使用默认值\n  gender: &#39;male&#39;,\n  age: &#39;22&#39;,\n  year: &#39;2019&#39; }\n  */\n</code></pre><h2 id="array">Array</h2>\n<h3 id="arrayfind">Array.find()</h3>\n<p>找到数组中相应的值，如果有就返回这个值，没有就undefined。</p>\n<pre><code>var arr = [{a:1},{a:2}];\n\nvar res = arr.find(v =&gt; v &amp;&amp; v.a &gt; 1);\nconsole.log(res);\n// {a:2}\n\nres = arr.find(v =&gt; v &amp;&amp; v.a &gt; 10);\nconsole.log(res);\n// undefined\n</code></pre><h3 id="arrayfindindex">Array.findIndex()</h3>\n<p>找到相应值的index</p>\n<pre><code>var arr = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;];\nvar res = arr.findIndex(v =&gt; v &amp;&amp; v == &quot;c&quot;);\nconsole.log(res);\n// 2\n\nres = arr.findIndex(v =&gt; v &amp;&amp; v == &quot;x&quot;);\nconsole.log(res);\n// -1</code></pre><h3 id="arrayincludes">Array.includes()</h3>\n<p>用来代替以前的Array.indexOf(xxx) != -1</p>\n<pre><code>var arr = [10,20,30,40];\n\n//以前\nif(arr.indexOf(30) != -1){\n  console.log(&quot;exist!&quot;);\n}\n\n//现在\n\nif(arr.includes(30)) {\n  console.log(&quot;exist!&quot;);\n}\n//exist!</code></pre><h3 id="arrayflat">Array.flat()</h3>\n<p>摊开数组，可以根据传入参数改变具体摊开的层数。默认摊开一层。</p>\n<pre><code>var nestedArray = [1,2,[3,4],[5,[6,7]]];\n\nnestedValues.flat(0);\n//[1,2,[3,4],[5,[6,7]]]\nnestedValues.flat();  //default 1\n//[1,2,3,4,5,[6,7]]\nnestedValues.flat(2);\n//[1,2,3,4,5,6,7];</code></pre><h3 id="arrayflatmap">Array.flatMap()</h3>\n<p>flatMap只能摊开一层，如果需要更多层，需要分开使用map()和flat().</p>\n<pre><code>[1,2,3,4,5,6].flatMap(v =&gt; {\n  if (v % 2 == 0) {\n    return [v, v * 2];\n  }\n  else {\n    return [];\n  }\n})\n\n//[2,4,4,8,6,12]</code></pre><h2 id="iterator">Iterator</h2>\n<h3 id="built-in-iterable">Built-in Iterable</h3>\n<p>Iterator简单来说，就是我们用next()来遍历一个集合。\n在ES6中，String, Array, TypedArray,Map, Set是默认iterable的。</p>\n<pre><code>var str = &quot;Hi&quot;\n//在string上使用iterator\nvar it1 = str[Symbol.iterator]();\n//这里Symbol.iterator是str对象的一个属性,我们通过[Symbol.iterator]获取到这个对象的iterator然后把它赋给it1。\n\nit1.next(); // { value: &quot;H&quot;, done: false}\nit2.next(); // { value: &quot;i&quot;, done: false}\nit3.next(); // { valye: undefinedn done:true}\n\nvar arr = [&quot;H&quot;,&quot;i&quot;];\n//在Array上使用iterator\n\nvar it2 = arr[Symbol.iterator]();\nit2.next(); // {value : &quot;H&quot;, done: false}\nit2.next(); // {value : &quot;i&quot;, done: false}\nit2.next(); // {value : undefined, done: true}\n</code></pre><h3 id="declarative-iterators">Declarative Iterators</h3>\n<p>for of 循环其实就是使用了iterator</p>\n<pre><code>var str = &quot;Hello&quot;;\nvar it = str[Symbol.iterator]();\n\n//在for loop中使用iterator\nfor(let v of it){\n  console.log(v);\n}\n\n//效果和直接使用for loop是一样的\nfor (let v of str) {\n  console.log(v);\n}\n</code></pre><p>...符号也使用iterator</p>\n<pre><code>var str =&quot;Hello&quot;;\nvar letters = [...str];\nconsole.log(letters);\n// [&quot;H&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;]</code></pre><h3 id="object类型没有iterator">Object类型没有iterator</h3>\n<p>我们在js中最常使用的对象类型，没有默认的iterator,我们需要自己定义一个。</p>\n<pre><code>var obj = {\n  a : 1,\n  b : 2,\n  c : 3\n}\nfor (let v of obj) {\n  console.log(v);\n}\n// TypeError!\n//想要使用for of循环的时候出现了错误\n\n//定义iterator属性\n\nobj[Symbol.iterator] = function(){\n  let keys = Object.keys(this);\n  let index = 0;\n  return {\n    next: () =&gt; {\n      if(index &lt; keys.length){\n        return {\n          done : false,\n          value : keys[index++]\n        }\n      }else {\n        return {\n          done : true,\n          value : undefined\n        }\n      }\n    }\n  };\n}\n\nconsole.log([...obj]);\n//[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code></pre><h2 id="generators">Generators</h2>\n<h3 id="generators-1">Generators</h3>\n<pre><code>function *generate() {\n  yield 1;\n  yield 2;\n  yield 3;\n  return 4;\n}\nvar it = generate();\nit.next(); // {value: 1, done : false}\nit.next(); // {value: 2, done : false}\nit.next(); // {value: 3, done : false}\nit.next(); // {value: 4, done : true}\n\nconsole.log([...generate()]);\n// [1,2,3]\n</code></pre><p>一个使用生成器的例子，这里我们给luckyNumbers对象一个我们自定义的生成器函数叫lucky,然后在调用这个生成器的时候使用...操作符来iterate这个生成器，打印1-30之间6的倍数。</p>\n<pre><code>var luckyNumbers = {\n  *lucky({\n    start = 0,\n    end = 100,\n    step = 1\n  } = {}) {\n    for (let i = start; i &lt;= end; i+= step) {\n      yield i;\n    }\n  }\n};\n\nconsole.log(`My lucky numbers are: ${\n  [...luckyNumbers.lucky({\n    start: 6,\n    end: 30,\n    step: 4\n  })]\n}`)\n\n//My lucky numbers are: 6,10,14,18,22,26,30\n</code></pre><h2 id="async-await">Async Await</h2>\n<h3 id="async出现的历史">Async出现的历史</h3>\n<p>这里有一个例子，我们先请求当前当前用户，获得用户数据以后，又请求当前用户所下过订单和进行中的订单的例子。</p>\n<p>以前用Promise的时候,使用链式then()来处理这种连续请求。</p>\n<pre><code>fetchCurrentUser()\n  .then(function onUser(user) {\n    //获得当前用户\n    return Promise.all([\n      //用Promise.all来做两个请求，返回的还是一个promise，如果有一个请求中有一个reject则都reject\n\n      fetchArchivedOrders( user.id ),\n      fetchCurrentOrders (user.id)\n    ]);\n  })</code></pre><p>后来我们有人不再用链式then()来处理多个请求。而是用generator来获得多个请求的response。一个generator可以yield一个promise，并且等待yield结果以后再进行下一步。但是这个方法一般要使用第三方库的一种runner函数进行，像Co，Koa都有。runner函数的作用就是在yield的时候等待结果resolve，然后再往下iterate，往下yield。</p>\n<pre><code>runner(function *main() {\n  var user = yield fetchCurrentUser();\n  var [ archivedOrders, currentOrders ] = yield Promise.all([\n    fetchArchivedOrders( user.id ),\n    fetchArchivedOrders( user.id )\n  ])\n});\n</code></pre><p>其实上面这个例子里的yield关键词，已经很像await关键词了，所以后来JS官方就推出了Async Await关键词，不再需要用第三方库的runner函数。</p>\n<pre><code>async function main() {\n  var user = await fectchCurrentUser();\n  var [archiveOrders, currentOrders] = await Promise.all([\n    fetchArchiveOrders(user.id),\n    fetchCurrentOrders(user.id)\n  ]);\n\n  return archiveOrders + currentOrders;\n}</code></pre><p>这里有个例子，我们同时请求三个file，但是保证打印结果是按顺序打印，也没有undefined。并且一请求到就立即打印结果，并不等待后续的请求完成。</p>\n<pre><code>function getFile(file) {\n  return new Promise(function(resolve){\n    fakeAjax(file,resolve);\n  });\n}\n\nasync function loadFiles(files) {\n\n  var prs = files.map(getFile);\n  //用map同时做三个请求\n\n\n\n  for (let pr of prs) {\n    console.log(await pr);\n  }\n  //在for loop中加入await关键词,来确保按顺序打印，也不会undefined。\n\n}\n\nloadFiles([&quot;files&quot;,&quot;file2&quot;,&quot;file3&quot;])；</code></pre><h3 id="async-await-problems">async await problems</h3>\n<p>async await也有一些问题</p>\n<ul>\n<li><p>await只能应对Promise</p>\n</li>\n<li><p>Starvation\npromise会在时间循环中排进microtask,会造成饥饿陷阱，这里不多写。</p>\n</li>\n<li><p>cancelation</p>\n</li>\n</ul>\n<p>Async函数是没有办法被手动取消的，比如一个request要下载巨大的文件，async函数过程就会一直进行</p>\n'},174:function(n,e){n.exports='<h2 id="节流-throttling">节流 Throttling</h2>\n<p>节流限制了一个函数可以在短时间内被调用的次数。可以这样形容：在一毫秒内最多执行此函数 1 次。</p>\n<blockquote>\n<p>Throttling enforces a maximum number of times a function can be called over time. As in &quot;execute this function at most once every 100 milliseconds.&quot;</p>\n</blockquote>\n<h4 id="再换句话说：">再换句话说：</h4>\n<p>节流会忽略在短时间内高频发生的事件，只按照计划好的频率触发。</p>\n<pre><code>//fn 要执行的函数\n//delay 计划好的执行间隔\n//返回一个函数\n\nfunction throttled(fn, delay) {\n    let lastCall = 0;//初始化lastCall\n    return function (...args) {\n        const now = (new Date).getTime();//当函数被运行，获取当前时间\n        if (now - lastCall &lt; delay) {\n\n        //这里（now - lastCall）就是间隔时间\n\n            return;//如果间隔时间小于计划好的执行间隔，什么也不做。\n        }\n        lastCall = now; //更新lastCall\n        return fn(...args);\n    } \n}</code></pre><h2 id="防抖-debouncing">防抖 Debouncing</h2>\n<p>防抖确保了一个函数只有在一个固定时间段内没有被调用过后，才会再次被调用。可以这样形容：比如说只有在 1 毫秒过后，才允许执行这个函数。</p>\n<blockquote>\n<p>Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in &quot;execute this function only if 100 milliseconds have passed without it being called.&quot;</p>\n</blockquote>\n<h4 id="再换句话说：-1">再换句话说：</h4>\n<p>防抖会等待事件不再高频发生，再触发。</p>\n<pre><code>//fn 要执行的函数\n//delay 计划好的等待时间\n//返回一个函数\n\nfunction debounced(delay, fn) {\n  let timerId;\n  return function (...args) {\n    if (timerId) {//如果正在一个timeout中\n      clearTimeout(timerId);//中断timeout，不会发生setTimeout的回调函数\n    }\n    timerId = setTimeout(() =&gt; {//开始新的timeout\n      fn(...args);\n      timerId = null;\n    }, delay);\n  }\n}</code></pre><h2 id="结论">结论</h2>\n<p>节流在我们<strong>不关心函数参数</strong>是什么的时候比较有用，比如鼠标移动，滚轮事件，我们在乎的是操作的频率。</p>\n<p>防抖在我们关心<strong>高频事件发生过后，得到的那个结果</strong>的时候，比较有用，比如用户迅速输入完一串用户名，对其进行查重的结果。</p>\n<p>这个<a href="http://demo.nimius.net/debounce_throttle/">网站</a> 很好的可视化了节流与防抖。</p>\n<p>参考信息</p>\n<p><a href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/">The Difference Between Throttling and Debouncing</a></p>\n<p><a href="https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07">Understanding Throttling and Debouncing</a></p>\n<p><a href="https://css-tricks.com/debouncing-throttling-explained-examples/">Debouncing and Throttling Explained Through Examples</a></p>\n<p><a href="https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44">Throttling and debouncing in JavaScript</a></p>\n'},175:function(n,e){n.exports='<h1 id="小程序视频组件">小程序视频组件</h1>\n<p>使用小程序WXML里自带的<code>&lt;video&gt;</code>标签, 指定src即可.\n<code>&lt;video src=&quot;...&quot; /&gt;</code></p>\n<h2 id="文件链接">文件链接</h2>\n<p>从七牛,腾讯COS等云存储文件的链接可以直接播放,没有障碍. 前提是得有一个云存储.</p>\n<h2 id="第三方视频链接">第三方视频链接</h2>\n<p>从页面使用正常途径复制到的视频链接都不会是视频文件的真实链接. 内嵌iframe地址中的src虽然能在浏览器中直接打开, 其实也并未获取到源文件地址, 因为打开显示的是第三方的播放器而非浏览器自带的播放器.</p>\n<p>所以在这种情况下如果一定要通过链接播放第三方视频只能采取非正常途径. </p>\n<p>比如如找到vid后使用后门链接.\n像Youtube的后门链接为<a href="http://www.youtube.com/get_video_info?video_id=XXXX">http://www.youtube.com/get_video_info?video_id=XXXX</a>\n访问以后会得到一个需要URLDecode解析的get_video_info文件,里面会有视频文件的url,但是直接访问的结果通常都会是403.  </p>\n<p>又比如使用网络抓包工具,检查访问视频页面的网络流量,从里边找到视频源地址.</p>\n<h2 id="使用腾讯视频官方提供的小程序插件推荐">使用腾讯视频官方提供的小程序插件(推荐)</h2>\n<p>小程序使用插件需要现在小程序管理后台中添加插件.</p>\n<p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html">小程序插件文档</a></p>\n<p><a href="https://github.com/tvfe/txv-miniprogram-plugin">视频插件的Github仓库</a></p>\n<h3 id="使用方法">使用方法</h3>\n<p>前往: <strong>对应AppID微信公众平台后台-设置-第三方服务</strong> \n在插件管理中搜索并添加腾讯视频(wxa75efa648b60994b)</p>\n<p>回到小程序中</p>\n<pre><code>// 在wxml上这样插入视频元素\n&lt;txv-video vid=&quot;e0354z3cqjp&quot; playerid=&quot;txv1&quot;&gt;&lt;/txv-video&gt;</code></pre><pre><code>// 在json里面插入\n&quot;usingComponents&quot;: {\n  &quot;txv-video&quot;: &quot;plugin://tencentvideo/video&quot;\n}</code></pre><pre><code>// 在app.json里面引入插件，注意插件版本号填最新的版本号\n&quot;plugins&quot;: {\n  &quot;tencentvideo&quot;: {\n    &quot;version&quot;: &quot;1.2.4&quot;,\n    &quot;provider&quot;: &quot;wxa75efa648b60994b&quot;\n  }\n}</code></pre><h3 id="注意事项">注意事项</h3>\n<p>该插件的视频和腾讯视频一样有广告, 有付费去广告的功能</p>\n<p>个人开发者没有使用这个插件的权限,提审会被拒绝</p>\n<p>使用插件不需要小程序有文娱/视频资质,因为插件本身有这个资质.</p>\n<p>禁止盗播腾讯视频版权视频</p>\n'},176:function(n,e,t){"use strict";var o=t(155);t.n(o).a},177:function(n,e,t){(n.exports=t(34)(!1)).push([n.i,".post{width:80%;margin:4em auto 1em;padding-bottom:2rem}pre{font-family:Courier New,Courier,monospace;font-size:1.1em;padding:1em;line-height:.95em}code,pre{background:var(--background-color);border-radius:2px}",""])},184:function(n,e,t){"use strict";t.r(e);var o=t(150),r={head:function(){return{title:"".concat(this.title,"-王翌轩的个人主页"),meta:[{hid:"".concat(this.title,"-王翌轩的个人主页"),name:"".concat(this.title,"-王翌轩的个人主页"),content:"".concat(this.title,"-王翌轩的个人主页")}]}},asyncData:function(n){return{content:t(166)("./".concat(n.route.params.id,"/").concat(n.route.params.id,".md")),title:o[n.route.params.id].title}},data:function(){return{content:"",title:""}}},l=(t(176),t(11)),component=Object(l.a)(r,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("div",{staticClass:"post",domProps:{innerHTML:this._s(this.content)}})])}),[],!1,null,null,null);e.default=component.exports}}]);