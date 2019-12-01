## Command Line

除了我们常用的几个命令行 cd, ls, rm, pwd, mkdir, rmdir， touch, ping
还有一些必须知道的。

- cat 查看文件内容
- less 分页查看文件内容
- man 命令行说明书
- rm 删除文件
- echo 打印
- kill 结束进程 默认参数为-15
- kill -9 强制结束
- pkill 根据应用名结束进程
- ps -ef | grep `<processname>` 用进程名做关键词搜索展示进程信息
- sudo !! 用super user权限执行上一个指令

explain shell

### Standard Stream
常用的std redirection符号，|, >, >>, < , 2>

### find
find / -type d -name log  查找名字为log的文件夹

## Shell

Shell 是我们使用 Command Line 的地方
Mac 的 Terminal 是一个运行 Shell 的应用， 并不是 Shell。
`echo $0`
可以查看目前在运行哪种 Shell

## Vim

3 种模式

1. insert mode `i`
2. command mode `ESC`
3. last line mode `:`

最重要的： 什么都不做并关掉 Vim `ESC :q!`
其他可以看 cheet sheet（微笑）。

## Server
- adduser 增加用户
- usermod -aG sudo `<username>` 将用户增加到super user group
- su `<username>` 切换用户
- sudo cat /var/log/auth.log 查看Server的登陆记录
- tail -f 实时查看一个文件的内容情况
- ls -a 展示隐藏文件（前缀为.）
- sudo service sshd restart 重启ssh服务

### 关闭root登录权限

sudo vi /etc/ssh/sshd_config

最简单的 nodejs http server

```
const http = require('http);
http.createServer(function(req, res) {
  res.write('Hello, World!');
  res.end();
}).listen(8080);
console.log('Server started! Listening on port 8080');
```

## SSH
客户端持有私钥， 公钥存在服务端。
在Home路径的/.ssh文件夹中`ssh-keygen`就可以创建一个sshkey。
有两个文件，.pub后缀的是公钥，另一个是私钥。

## ufw 
- ufw enable 开启端口防火墙
- ufw allow ssh 允许ssh端口正常使用
- ufw reject http 拒绝http请求并返回拒绝信息

## Nginx
Server本身不响应reqeust。有了Web Server比如Apache， Nginx的Server才能响应request。

- sudo apt install nginx 安装
- sudo service nginx start 启动

现在Server会响应（80端口）http请求了。

所有请求前往的默认根目录为
/var/www/html

- sudo less /etc/nginx/sites-available/default 查看nginx默认配置

```
location / {
  proxy_paas http://127.0.0.1:XXXX/; //请求转端口
  return 302 htts://XXXX  // 临时重定向
}

listen 443 http2 ssl; // 使用http2
```
Nginx默认打开gzip， 图片不会被压缩，因为图片本身就被压缩过了。
gzip设置在nginx.conf



## Process Manager
让进程在Server启动的时候就开始运行

- sudo npm i -g pm2 安装PM2
- pm2 start app.js 启动PM2
- pm2 startup 让PM2在server启动时启动