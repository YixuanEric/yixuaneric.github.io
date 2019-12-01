## 节流 Throttling

节流限制了一个函数可以在短时间内被调用的次数。可以这样形容：在一毫秒内最多执行此函数 1 次。

> Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."

#### 再换句话说：

节流会忽略在短时间内高频发生的事件，只按照计划好的频率触发。

```
//fn 要执行的函数
//delay 计划好的执行间隔
//返回一个函数

function throttled(fn, delay) {
    let lastCall = 0;//初始化lastCall
    return function (...args) {
        const now = (new Date).getTime();//当函数被运行，获取当前时间
        if (now - lastCall < delay) {
        
        //这里（now - lastCall）就是间隔时间
           
            return;//如果间隔时间小于计划好的执行间隔，什么也不做。
        }
        lastCall = now; //更新lastCall
        return fn(...args);
    } 
}
```

## 防抖 Debouncing

防抖确保了一个函数只有在一个固定时间段内没有被调用过后，才会再次被调用。可以这样形容：比如说只有在 1 毫秒过后，才允许执行这个函数。

> Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called."

#### 再换句话说：

防抖会等待事件不再高频发生，再触发。

```
//fn 要执行的函数
//delay 计划好的等待时间
//返回一个函数

function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {//如果正在一个timeout中
      clearTimeout(timerId);//中断timeout，不会发生setTimeout的回调函数
    }
    timerId = setTimeout(() => {//开始新的timeout
      fn(...args);
      timerId = null;
    }, delay);
  }
}
```



## 结论
节流在我们**不关心函数参数**是什么的时候比较有用，比如鼠标移动，滚轮事件，我们在乎的是操作的频率。

防抖在我们关心**高频事件发生过后，得到的那个结果**的时候，比较有用，比如用户迅速输入完一串用户名，对其进行查重的结果。

这个[网站](http://demo.nimius.net/debounce_throttle/) 很好的可视化了节流与防抖。

参考信息

[The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)

[Understanding Throttling and Debouncing](https://blog.bitsrc.io/understanding-throttling-and-debouncing-973131c1ba07)

[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)

[Throttling and debouncing in JavaScript](https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44)