# 手写一些 JS 函数

实现 call(), 这里和 apply()的区别就是参数的个数，这边用了...args 就当一样把

```
Function.prototype.myCall = function(context, ...args) {
	if (!context) {
		context = window;
	}
	let self = this;
	context.fn = self;
	let result = context.fn(...args);
	delete context.fn;
	return result;
};
```

实现 bind(), bind 会把更改过的函数给 return 出来

```
Function.prototype.myBind = function(context, ...args) {
	if (!context) {
		context = window;
	}
	let self = this;
	return function() {
		return self.apply(context, ...args);
	};
};
```

老生常谈，节流。if 里面检测 new Date().getTime()和上一次被 call 时间的差距

```
function makeThrottle(fn, delay) {
	let lastCall = 0;
	return function(...args) {
		const now = new Date().getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		return fn(...args);
	};
}
```

防抖

```
function makeDebounce(fn, delay) {
  let timerID
  return function(...args) {
    if(timerID) {
      clearTimeout(timerID)
      timerID = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
}
```

深拷贝

```
function deepCopy(obj) {
	let result
	if(typeof obj == 'object') {
		result = object.contructor == Array ? [] : {}
		for(let key in obj) {
			result[key] = typeof object == "object" ? deepCopy(obj[key]) : obj[key]
		}
	} else {
		result = obj
	}
	return result
}
```
