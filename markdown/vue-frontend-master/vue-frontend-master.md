# Reactivity

本文根据Evan You自己在网上的Advanced Vue Course整理。

## getters & setters

比如说我们需要完成一个情况, `let a = 3; let b = a * 10;`。我们需要保证 b 是 a 的 10 倍，不管我们怎么改动 a。但是我们改动 a 的时候，b 并不会自动改变，那我们应该怎样去完成这个自动更新？

Vue 使用了 ES5 里的 Object.defineProperty API。
这个 API 的介绍在 You don't know JS 的书里或者 MDN 的文档里说的都很清楚。一个 Object 的每个 Key 都是有几个 Property 可以设置的。这里我只描述怎么用这个 API 完成上面的效果。

```
const myState = {
  a: '3',
  b: '30'
};

Object.defineProperty(myState, 'b', {
  get() {
    return myState['a'] * 10;
  }
})

console.log(myState.b); // 30
myState.a = 5;
console.log(myState.b) // 50
```

## 这样就行了吗？

上面这个步骤已经完成了我们想要的效果，每当我们去获取 myState.b 但问题是我们是自己手动 console.log 属性 b 去观察到这个 b 已经随着 a 的变化而变化过了。
意思就是说假如我们 DOM 中有一个元素像这样在初次渲染的时候使用了 b 的值。

```
const divUseBValue = document.querySelector('#useBValue');
divUseBValue.innerHTML = myState.b;

```

在 myState.a 的值发生变化的时候，dom 并不会相应的发生变化，我们得手动再操作 dom 更新才可以。

那比较直观的想法就是：那就把 DOM 操作放在 myState.a 的 setter 里不就好了吗，每当我们改变 myState.a 的值的时候，我们就操作 dom 让元素再取一次 b 的值就好了。

```
const divUseBValue = document.querySelector('#useBValue');

let aValue; // 用一个外部变量表示该属性
Object.defineProperty(myState, 'a', {
  set(newValue) {
    divUseBValue.innerHTML = myState.b;
    aValue = newValue
    // 不可以this.a = newValue， 这样会反复调用setter，爆栈
  },
  get() {
    return aValue
  }
})
let bValue;
Object.defineProperty(myState, "b", {
  get() {
    bValue = myState.a * 10;
    console.log(bValue)
    return bValue;
  }
});

// set myState.a的值, 机会触发dom变化，接下来每次都是这样
myState.a = 3;

```

这个时候我们 JS 中只要改变 myState.a 的值，DOM 中用到 myState.b 的元素就会自己更新。

## 这样真的可以吗？ 如何让他变的更抽象？

上面这个例子是非常 imperative 的， 我们把更新 DOM 的操作全部放在了 myState 相关属性的 setter 里。但是把要做的 DOM 操作全部在一处声明好显然是不现实的。我们在网上都看过 Vue 是 MVVM，或者是观察者模式。那这种模式到底是什么意思呢？并且还要用到 Object.defineProperty。

我们的数据**Model**就是我们上面用到的 myState 对象。我们的目的是在他变化的时候做一些事情，所以我们就要**观察**它的每一个属性。

上面更新**View**层的操作，我们可以把它定义为一个**更新**函数。

这个**更新**函数和刚才**观察**的某一个属性，有一个**关联**的关系。这一个**关联**中能触发很多**更新**函数，那这些**更新**函数就叫做这个**关联**的**订阅者**。

Model 中的一个属性通过一个**关联**能触发很多**更新**函数，也就是说一处**Model**变化，通过**关联**引发多处**View**变化，那么这个**关联**就是我们的**ViewModel**了。

到此我们理清了 MVVM。**Model -》 ViewModel =》 View。**

## Dependency

我们先来实现我们的 ViewModel，**关联**。就是 Dependecy。

这个关联要干嘛？

1. 把**更新**函数变成他自己的**订阅者**。（Depend）
2. 在检查到**观察**对象的属性发生变化时，触发他拥有的**订阅者**。（Notify）

谁会用这个关联？

1. 被**观察**的 Model 的属性的 getter。

**！重点！** 当**更新**函数第一次运行的时候，因为要获取属性的值来表现在 View 层上，所以一定会调用到这个属性的 getter。所以在第一次运行**更新**函数的时候，我们就要在 getter 中把这个**更新**函数添加到一个**关联**的订阅者列表中，这样这个**关联**之后就可以**Notify**它了。

```
class Dep {
  constructor() {
    // 订阅者列表
	  this.subscribers = new Set();
	}

  // 把一个更新函数都变成他自己的一个订阅者
  depend() {
    // 这个if是个重点，为什么要有这个if马上再说
    if (activeUpdate) {
      console.log("depending");
      this.subscribers.add(activeUpdate);
    }
  }
  // 触发所有订阅者
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}
```


## Observe

我们会有一个对象当作 State 来保存我们需要**观察**的属性。这边的精髓就是 defineProperty 了。在**更新**函数第一次get这个属性的值的时候，创建一个 Dep 的实例，并且把这个**更新**函数加入到订阅者列表中，未来可以触发（notify）他。妙就妙在这个observe函数，使的State的每一个属性有了**自己**的关联对象，并且只把和他**自己**相关的**更新**函数加到了属于自己的**关联**对象的订阅者列表中。一切都因为这个getter的闭包，而顺利找到了拥有这个getter回调的属性。

```
function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];
    // 一个“关联”实例
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        // 把正在执行的更新函数加到关联的订阅者列表中
        dep.depend();
        return internalValue;
      },
      set(newValue) {
        internalValue = newValue;
        // 触发关联实例里的所有更新函数
        dep.notify();
      }
    });
  });
}

```

那为啥dep.depend()什么参数也不用传？ 加的**更新**函数在哪儿呢？ 原来dep.depend的实现中有一个activeUpdate的变量，如果找到了这个变量就把他添加到自己的订阅者列表中。这个变量是什么，我们继续往下看。

## Update Function
上边讲Dependency的代码中有一个`if（activeUpdate）`。那么这个activeUpdate是什么呢？首先我们需要这个变量的原因是因为，我们在第一次运行一个**更新**函数的时候，我们需要把这个**更新**函数添加到一个**关联**的订阅者列表中。

下面是实现的方式： 因为JS是单线程的，一次只能有一个函数在运行。所以我们在首次用JS渲染DOM的时候，每个**更新**的函数在运行的时候，我们都把他交给一个全局变量，然后当这个**更新**函数中用到State中的属性的时候，这个属性的getter回调中的**关联**，就去找到当前的全局变量，加到自己的订阅者列表中。

```
let activeUpdate;
let update = () => {
  do something on DOM
};
activeUpdate = update;
update()
activeUpdate = null;
```
这样的代码虽然也可以，但是我们应该把它抽象出来做成一个函数。


```
let activeUpdate;

function updateAndBecomeASubscriber(update) {
  function wrappedUpdate() {
    activeUpdate = wrappedUpdate;
    console.log("bbb");
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}

```

# 总结
写到这里其实已经实现了一个很简单的Vue观察者模式的机制了。对MVVM也有了更透彻的理解。不得不感叹，声明式的代码固然可以很容易的让你理解代码在干什么，但是有些步骤为了实现声明式，用到了函数闭包。导致了理解函数作用域的时候在要在代码中跳跃着看，让人更难理解底层实现方式。Evan You大大在将这一部分的时候也很难connect the dots。



