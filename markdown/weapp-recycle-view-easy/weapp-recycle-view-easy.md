# 小程序实现最简单的长列表性能优化


## 代码片段
看小程序里的调试台的WXML面板，会发现不管怎么滚动，WXML的节点数量是在一定范围里的。是我们预期的效果。

## 为什么要优化长列表？

一般大量数据的时候我们会采用分页的方式，后端一次返回定量的数据，前端一旦分页就更换节点信息，展示新的内容。但是在移动端，分页的体验并不好，通常采用滚动的加载方式。而通常做滚动的时候，加载来的新数据都是直接添加到当前 dom 元素列表的屁股后面。加载的多了以后页面上就会有很多的节点,影响性能。

看一下会无限增加节点的伪代码。

```
Page({
  data: {
    listData: []
  },
  getData() {
    Server.postDataToHere().then(result => {
      this.setData({
        // 把新来的数据直接添加到data后面
        listData: this.data.listData.concat(result)
      })
    })
  }
})
```

这样的实现方法可以是可以，但是不仅会遇到节点过多的问题，最后还会遇到 setData 的数据量过大的问题。小程序对 setData 的数据大小是有限制的。

## WXML 结构

要滚动所以很显然要用 scroll-view。scroll-view 要绑定触底加载新数据和滚动事件。

```
// 最外层的scroll-view
<scroll-view
scroll-y
style="width:100%;height: 100vh"
bindscrolltolower="onScrollToLower" // 触底加载新数据
bindscroll="onScroll"> // onScroll绑定即时检查

  // scroll-view里循环渲染view，要用绝对定位因为之后要算位置
  <view wx:for="{{listData}}" wx:key="{{index}}"
  style="position: absolute;
  width:300px;height:200px;
  top:{{item.top}}px; // item的top要用item在总列表里的index值给算出来
  background:#333">
  // view里面是什么就无所谓了，这里面放个text来显示item的index好了
    <text style="color:white;display:block;">{{item.index}}</text>
  </view>
</scroll-view>
```

## JS 结构

我们的 Page 的 data 里还是只有一个 listData 作为列表的数据源。其他不用 setData 的变量我们直接声明在外层。需要一个用来放到目前为止所有数据的 Array。还要有一个 scrollTop 来表示当前滚动到的位置，和一个 lastScrollTop 来表示之前一次滚动事件的位置，来判断是向上滚动还是向下滚动。

还有一个**indexRange**来表示现在渲染的数据区域，如果经过滚动事件，发现需要的渲染的区域和上次不一样了，那么代表要 setData 了。

```
Page({
  data: {
    listData: [] // 作为列表的数据源
  },
  totalDataList: [] // 放到目前为止所有数据,
  scrollTop:0,
  lastScrollTop: 0，
  indexRange: [0,0],
  onLoad: function() {
    ...
  }
  ...
})
```

## 优化基本思路

思路其实很简单，就是监听滚动事件，如果发现有离当前视窗很远的元素，用户根本就看不到，setData 就不包括这个元素，意思就是就不再渲染它。
所以这其实是一个跟随事件的即时检查。

下面这是这个滚动事件触发的回调函数的代码

```
  reloadData() {
    // 原来存放最后结果的Array
    const items = []

    // 如果是向下滚动就从上次渲染区域的开头开始遍历
    // 如果是向上滚动就从开头开始遍历
    const start = this.lastScrollTop <= this.scrollTop ? this.indexRange[0] : 0

    // 从start遍历到所有数据的最后
    for (let index = start; index < this.totalDataList.length; index++) {
      // 如果当前数据的top和scrollTop的差距超过一定的值就不再渲染它
      if (Math.abs(this.scrollTop - this.totalDataList[index].top) < 3000) {
        // 如果还在预期的距离以内就把它放到要渲染的结果里
        items.push(this.totalDataList[index])
      }
    }
    // 有了要渲染的结果Array里以后， 对比这个结果Array和原有的indexRange，如果有出入就应该重新setData重新渲染了。

    if (this.indexRange[1] !== items[items.length - 1].index || this.indexRange[0] !== items[0].index) {
      this.indexRange[1] = items[items.length - 1].index
      this.indexRange[0] = items[0].index
      // 重新setData
      this.setData({
        listData: items
      })
    }
    // 记录这次的scrollTop
    this.lastScrollTop = this.scrollTop
  }
```

## 重点

1. 每次scroll的时候通过遍历检查去检查所有数据的位置。
2. 每个数据的位置一定是固定的，因为使用了**绝对定位**，是算出来的。所以检查起来并不用去DOM里取元素的位置。
3. 判断是否要重新setData根据是根据这次判断的是否渲染结果Array对比上次已经渲染了的Array。

## 总结
除了实时监听scroll，我们还可以使用Intersection Observer这个API，我没有试过但是因为这个API的原理好像是异步的，如果滚动过快预估会出现一些问题。

这个方法在滚动很快的时候也会出现白屏的情况，比如到很下方的时候突然滚到最顶端，但是体验上我觉得是可以接受的，市面上的小程序如花瓣LITE也有这个问题。

性能上主要就是每次scroll事件都再遍历。但是我们只在最外层的scroll-view的上放了一个event listener，如果想当然的话就会去给每一个元素加listener，这里一定要用绝对定位的思想转过来。

明白了这个原理以后，就可以实现两列布局和瀑布流布局了。


## 完整JS代码
不知道为什么现在代码片段分享会报系统错误
```
Page({
  data: {
    listData: [{
      top: 0,
      index: 0
    }, {
      top: 210,
      index: 1
    }, {
      top: 420,
      index: 2
    }, {
      top: 630,
      index: 3
    }, {
      top: 840,
      index: 4
    }]
  },
  totalDataList: [{
    top: 0,
    index: 0
  }, {
    top: 210,
    index: 1
  }, {
    top: 420,
    index: 2
  }, {
    top: 630,
    index: 3
  }, {
    top: 840,
    index: 4
  }],
  scrollTop: 0,
  lastScrollTop: 0,
  indexRange: [0, 0],
  onLoad: function () {

  },
  getData() {
    const result = []
    for (let index = 0; index < 5; index++) {
      let base = this.data.listData[this.data.listData.length - 1];
      result.push({
        top: base.top + (index * 210),
        index: base.index + index
      })

    }
    this.totalDataList = this.totalDataList.concat(result)
  },
  onScrollToLower() {
    this.getData()
    this.reloadData()
  },
  reloadData() {
    const items = []
    const start = this.lastScrollTop <= this.scrollTop ? this.indexRange[0] : 0
    for (let index = start; index < this.totalDataList.length; index++) {
      if (Math.abs(this.scrollTop - this.totalDataList[index].top) < 3000) {
        items.push(this.totalDataList[index])
      }
    }
    //console.log(items)
    if (this.indexRange[1] !== items[items.length - 1].index || this.indexRange[0] !== items[0].index) {
      this.indexRange[1] = items[items.length - 1].index
      this.indexRange[0] = items[0].index
      //console.log(this.indexRange)
      this.setData({
        listData: items
      })
    }
    this.lastScrollTop = this.scrollTop
  },
  onScroll(e) {
    this.scrollTop = e.detail.scrollTop
    this.reloadData()
  }
})
```

