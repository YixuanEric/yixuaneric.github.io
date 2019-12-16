# 面试复盘12/17

### 写出下列代码的返回结果

```
async function async1() {
	console.log("async1 start");
	await async2();
	console.log("async1 end");
}

console.log("script start");
async1();

async function async2() {
	console.log("async 2");
}

setTimeout(() => {
	console.log("setTimeout");
});

new Promise(resolve => {
	resolve();
	console.log("promise1");
}).then(() => {
	console.log("promise2");
});

console.log("script end");

```

一条一条分析，首先毋庸置疑打印 script start，然后执行 async1 函数，进入 async1 函数，打印 async1 start。因为又 await 关键词所以要同步执行，执行 async2 函数，打印 async2， 回到 async1 函数，await 后面的东西被看作是微任务，跳过。然后遇到 setTimeout，异步任务，跳过。然后遇到 new Promise，这个东西因为在构造一个 Promise 所以是同步任务，所以执行，里面打印 promise1。后面点 then 是微任务，跳过。然后打印 script end。

回头看刚才跳过的东西，微任务优先于其他异步任务，所以打印 async1 end， promise2。然后执行 setTimeout。 所以最后结果为。

```
script start
async1 start
async 2
promise1
script end
async1 end
promise2
setTimeout
```

### CDN 原理

- 获取响应速度最快的 CDN 节点的 IP 地址
- 向 CDN 节点发出访问请求，而不是原始服务器
- 对静态内容做缓存

### 实现自动补全输入框要注意什么

- 快速输入时的防抖
- 是否时模糊搜索
- 候选项数量太多的时的处理

### 电子邮件的正则表达式

^[a-zA-Z0-9\\\_-]+@[a-zA-Z0-9\\\_-]+(\.[a-zA-Z0-9\\\_-]+)+\$

### 二叉树的所有节点值的和

```
// Node结构
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const input = [-10,9,20,null,null,15,7];

// 根据一个Array生成一棵二叉树
function makeTree(input) {
	let queue = [];
	let root = new TreeNode(input.shift());
	queue.push(root);
	while (queue.length > 0) {
		let newQueue = [];
		for (let node of queue) {
			const leftVal = input.shift();
			const rightVal = input.shift();
			if (leftVal !== undefined) {
				const leftNode = new TreeNode(leftVal);
				node.left = leftNode;
				newQueue.push(node.left);
			}
			if (rightVal !== undefined) {
				const rightNode = new TreeNode(rightVal);
				node.right = rightNode;
				newQueue.push(node.right);
			}
			console.log(node);
			queue.shift();
		}
		queue = newQueue;
	}
	return root;
}
let makeTreeRes = makeTree(input);

// 计算树中所有节点的和
function pathSum(root) {
	if (!root) {
		return 0;
	} else {
		return root.val + pathSum(root.left) + pathSum(root.right);
	}
}

console.log(pathSum(makeTreeRes)) // 41
```

### 实现 Array.flatten

```
// flat一层
function flatten(arr) {
  return Array.prototype.concat.apply([], arr)
}
// 根据参数flat
function flattenWithDepth(arr, depth) {
  while(depth--) {
    arr =  Array.prototype.concat.apply([], arr)
  }
  return arr
}
```

### Leetcode 394 Decode String

```
function decodeString(s) {
  let num = ""
  let unit = ""
  let stack = []

  for(let char of s) {
    if(char == "[") {
      let item = [num, unit]
      stack.push(item)
      num = ""
      unit = ""
    } else if(char ="]") {
      let outItem = stack.pop()
      let curRes = out[1]
      for(let index = 0; index < out[0]; index++ ) {
        curRes += unit
      }
      unit = curRes
    } else if(!isNaN(parseInt(char))) {
        num += char
    } else {
      unit += char
    }
  }
  return unit
}
```

### 实现 Promise.all

```
Promise.prototype.myAll = function(promiseArray) {
	return new Promise(resolve => {
		let counter = 0;
		for (let prom of promiseArray) {
			console.log(prom);
			Promise.resolve(prom).then(res => {
				console.log(counter);
				counter += 1;
				if (counter == promiseArray.length) {
					resolve();
				}
			});
		}
	});
};

```

### 实现 Promise.race

```
Promise.prototype.myRace = function(promiseArray) {
	return new Promise(resolve => {
		for (let prom of promiseArray) {
			Promise.resolve(prom).then(res => {
					resolve();
			});
		}
	});
};

```

### Leetcode 3

```
functionlengthOfLongestSubstring(s) {
    let globalMax = 0
    let queue = []
    for(let char of s) {
        if(queue.indexOf(char) !== -1) {
            queue = queue.slice(queue.indexOf(char) + 1)
        }
        queue.push(char)
        globalMax = Math.max(globalMax, queue.length)
    }
    return globalMax
};
```
