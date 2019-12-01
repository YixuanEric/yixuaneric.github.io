# 小程序视频组件

使用小程序WXML里自带的`<video>`标签, 指定src即可.
`<video src="..." />`


## 文件链接
从七牛,腾讯COS等云存储文件的链接可以直接播放,没有障碍. 前提是得有一个云存储.


## 第三方视频链接

从页面使用正常途径复制到的视频链接都不会是视频文件的真实链接. 内嵌iframe地址中的src虽然能在浏览器中直接打开, 其实也并未获取到源文件地址, 因为打开显示的是第三方的播放器而非浏览器自带的播放器.

所以在这种情况下如果一定要通过链接播放第三方视频只能采取非正常途径. 

比如如找到vid后使用后门链接.
像Youtube的后门链接为http://www.youtube.com/get_video_info?video_id=XXXX
访问以后会得到一个需要URLDecode解析的get_video_info文件,里面会有视频文件的url,但是直接访问的结果通常都会是403.  

又比如使用网络抓包工具,检查访问视频页面的网络流量,从里边找到视频源地址.



## 使用腾讯视频官方提供的小程序插件(推荐)

小程序使用插件需要现在小程序管理后台中添加插件.

[小程序插件文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)

[视频插件的Github仓库](https://github.com/tvfe/txv-miniprogram-plugin)

### 使用方法

前往: **对应AppID微信公众平台后台-设置-第三方服务** 
在插件管理中搜索并添加腾讯视频(wxa75efa648b60994b)

回到小程序中

```
// 在wxml上这样插入视频元素
<txv-video vid="e0354z3cqjp" playerid="txv1"></txv-video>
```
```
// 在json里面插入
"usingComponents": {
  "txv-video": "plugin://tencentvideo/video"
}
```
```
// 在app.json里面引入插件，注意插件版本号填最新的版本号
"plugins": {
  "tencentvideo": {
    "version": "1.2.4",
    "provider": "wxa75efa648b60994b"
  }
}
```

### 注意事项

该插件的视频和腾讯视频一样有广告, 有付费去广告的功能

个人开发者没有使用这个插件的权限,提审会被拒绝

使用插件不需要小程序有文娱/视频资质,因为插件本身有这个资质.

禁止盗播腾讯视频版权视频

