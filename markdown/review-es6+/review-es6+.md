## String

### Template Strings

连接String更方便直观。使用反引号包括要生成的String，使用``${}``包括具体变量。

```
var name = "Yixuan";
var email = "yixuan124@gmail.com";
var title = "Student";

//以前
var msg = "Welcome! Your " +
    title + " is " + name + ", contact: " +
    email + ".";

//现在

var msg = `Welcome! Your ${title} is ${name}, contact: ${email}.`

//Welcome! Your name is Yixuan, contact: yixuan124@gmail.com.
```

### Tagged Templates

在模版字符串前调用自定函数，来定制模版字符串的解析方式。这个函数的第一个函数包含一个字符串值的数组，其余的参数是一系列的$表达式的引用变量，可以用...操作来把这些参数当成一个数组。

这个例子中我们的自定函数formatCurrency将字符串中的数字加上了$符号并保留两位小数。

```
var amount = 4.2;
var msg = formatCurrency`The total for your order is ${amount}.`

function formatCurrency(strings, ...values) {
  var str = "";
  //console.log(strings);
  for (let i = 0; i < strings.length; i++) {
    str += strings[i];

    if( i < values.length){
      console.log(typeof values[i]);
      if(typeof values[i] == "number") {
        str += `$${values[i].toFixed(2)}`;
      }else {
        str += values[i];
      }
    }
  }
  return str;
}

console.log(msg);
//The total for your order is $12.30.
```

### String Padding & String Trimming

JS标准库中现在自带给字符串两边加内容和删减空格的方法。

padStart给字符串左边加内容，padEnd给字符串右边加内容。

```
var str = "Hello";

str.padStart(5); // "Hello"
str.padStart(8) // "   Hello"
str.padStart(8, "*"); // "***Hello"
str.padStart(8, "12345"); // "123Hello"
str.padStart(8, "ab"); // abaHello"

str.padEnd(8) // "Hello   "
str.padEnd(8, "*") // "Hello***"
str.padEnd(8, "ab"); // "Helloaba"

```

trimStart去除左边空格， trimEnd去除右边空格。
```
var str = "   some stuff \t\t";

str.trim(); // "some stuff"
str.trimStart(); // "some stuff      "
str.trimEnd(); // "   some stuff"
```

## Destructuring


有时我们get到了一个很大的JSON对象，我们需要把里面的一些值分配到变量当中。解构让这个操作更方便。

看一个例子。
```
var tmp = getSomeRecords();
//tmp是一个拥有两个对象的数组。

//以前

var first = tmp[0];
var second = tmp[1];

var firstName  = first.name;
var firstEmail = first.email !== undefined ? first.email : "no email";

var secondName = second.name;
var secondEmail = second.email !== undefined ? first.email : "no email";

//现在

var [
  {// 创建一个叫做firstName的变量，值是数组中第一个对象中name键的值。
    
    name: firstName,
    
    // 创建一个叫做firstEmail的变量，值是数组中第一个对象中email键的值,如果没有这个键则使用默认值“no email"。
    
    email: firstEmail = "no email"
    
  },
  {
    name: secondName,
    email: secondEmail = "no email"
  }
] = tmp;
```
注意在这个例子中，赋值等号左边的[],这个中括号不代表数组，而代表一种解构赋值的pattern模式。还有要注意的是像上面这个例子的email的默认值只会在检测到undefined的时候才会被使用，如果值是null，不会触发使用默认值。

看一个更简单的例子。

```
function data(){
  return [1,2,3];
}
// 以前
var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];

//现在

var [
    first,
    second,
    third
    ] = data();
```

如果左边的变量比右边的值多，多余的变量的值就会是undefined。如果左边的变量比右边的值少，多余的值会被忽略。

如果我们要在一个变量里多赋几个值呢？

```
data = [1,2,3,4,5];

var [
  first,
  second,
  third,
  ...fourth
] = data;

//这里fourth是[4,5];
```
如果值不够
```
data  =[1,2,3];
var [
  first,
  second,
  third,
  ...fourth
] = data;

//这里fourth是空数组[];
```

有的时候我们需要交换变量的值，用解构也更方便。

```
var x = 10;
var y = 20;

//以前
var tmp = x;
x = y;
y = tmp;

//现在
]
[y,x] = [x,y];
```

有的时候我们将一个数组传入函数的时候，我们只需要它的前三个元素，我们也可以使用解构，在函数参数声明的时候就做到这步。

```
function data([
  first,
  second,
  third
]) {
}
```

解构赋值如果出现赋值错误，和普通赋值一样，也会报错。
```
var data = null;

var [first, second] = data;

//TypeError

function foo([first,second])
} {
  ...
}

foo(data);//传入null

//TypeError
```

这个时候我们需要Graceful Fallback（降级，向下兼容）
```
var data = null;
var [first, second] = data || [];

//不报错

function foo([first,second] = [])
} {
  ...
}
//不报错
```

嵌套解构

```
var data = [1,[2,3],4];

var [
  first,
  [
    second,
    third
  ],
  fourth
] = data;
```

## Object Destructuring

有的时候我们有一个默认的对象，但是我们需要根据一个新传过来的对象，来创建一个新对象。举个例子，我们知道的表单信心有name,wechat,phone,gender等属性（键名），但是有时表单会有新的属性。这是我们可以用解构赋值来很好的创建出一个新对象，来传到后端或传到数据库。
```

function makeObject({
  name = "default name",
  wechat = "default wechat",
  phone = "default phone",
  gender = "none",
  ...otherProps
} = {}) {
  return {
    name, 
    wechat, 
    phone, 
    gender,
    ...otherProps
  }
}

const obj = {
  name: "wyx",
  wechat: "weixin",
  gender: "male",
  age:"22",
  year:"2019"
}

const newObj = makeObject(obj);
console.log(newObj);
/*
{ name: 'wyx',
  wechat: 'weixin',
  phone: 'default phone',//没有的属性使用默认值
  gender: 'male',
  age: '22',
  year: '2019' }
  */

```

## Array

### Array.find()
找到数组中相应的值，如果有就返回这个值，没有就undefined。

```
var arr = [{a:1},{a:2}];

var res = arr.find(v => v && v.a > 1);
console.log(res);
// {a:2}

res = arr.find(v => v && v.a > 10);
console.log(res);
// undefined

```

### Array.findIndex()
找到相应值的index

```
var arr = ["a","b","c","d"];
var res = arr.findIndex(v => v && v == "c");
console.log(res);
// 2

res = arr.findIndex(v => v && v == "x");
console.log(res);
// -1
```
### Array.includes()

用来代替以前的Array.indexOf(xxx) != -1

```
var arr = [10,20,30,40];

//以前
if(arr.indexOf(30) != -1){
  console.log("exist!");
}

//现在

if(arr.includes(30)) {
  console.log("exist!");
}
//exist!
```

### Array.flat()
摊开数组，可以根据传入参数改变具体摊开的层数。默认摊开一层。
```
var nestedArray = [1,2,[3,4],[5,[6,7]]];

nestedValues.flat(0);
//[1,2,[3,4],[5,[6,7]]]
nestedValues.flat();  //default 1
//[1,2,3,4,5,[6,7]]
nestedValues.flat(2);
//[1,2,3,4,5,6,7];
```
### Array.flatMap()
flatMap只能摊开一层，如果需要更多层，需要分开使用map()和flat().

```
[1,2,3,4,5,6].flatMap(v => {
  if (v % 2 == 0) {
    return [v, v * 2];
  }
  else {
    return [];
  }
})

//[2,4,4,8,6,12]
```

## Iterator

### Built-in Iterable 

Iterator简单来说，就是我们用next()来遍历一个集合。
在ES6中，String, Array, TypedArray,Map, Set是默认iterable的。

```
var str = "Hi"
//在string上使用iterator
var it1 = str[Symbol.iterator]();
//这里Symbol.iterator是str对象的一个属性,我们通过[Symbol.iterator]获取到这个对象的iterator然后把它赋给it1。

it1.next(); // { value: "H", done: false}
it2.next(); // { value: "i", done: false}
it3.next(); // { valye: undefinedn done:true}

var arr = ["H","i"];
//在Array上使用iterator

var it2 = arr[Symbol.iterator]();
it2.next(); // {value : "H", done: false}
it2.next(); // {value : "i", done: false}
it2.next(); // {value : undefined, done: true}

```
### Declarative Iterators

for of 循环其实就是使用了iterator

```
var str = "Hello";
var it = str[Symbol.iterator]();

//在for loop中使用iterator
for(let v of it){
  console.log(v);
}

//效果和直接使用for loop是一样的
for (let v of str) {
  console.log(v);
}

```

...符号也使用iterator
```
var str ="Hello";
var letters = [...str];
console.log(letters);
// ["H","e","l","l","o"]
```
### Object类型没有iterator

我们在js中最常使用的对象类型，没有默认的iterator,我们需要自己定义一个。
```
var obj = {
  a : 1,
  b : 2,
  c : 3
}
for (let v of obj) {
  console.log(v);
}
// TypeError!
//想要使用for of循环的时候出现了错误

//定义iterator属性

obj[Symbol.iterator] = function(){
  let keys = Object.keys(this);
  let index = 0;
  return {
    next: () => {
      if(index < keys.length){
        return {
          done : false,
          value : keys[index++]
        }
      }else {
        return {
          done : true,
          value : undefined
        }
      }
    }
  };
}

console.log([...obj]);
//['a','b','c']
```
## Generators

### Generators

```
function *generate() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}
var it = generate();
it.next(); // {value: 1, done : false}
it.next(); // {value: 2, done : false}
it.next(); // {value: 3, done : false}
it.next(); // {value: 4, done : true}

console.log([...generate()]);
// [1,2,3]

```
一个使用生成器的例子，这里我们给luckyNumbers对象一个我们自定义的生成器函数叫lucky,然后在调用这个生成器的时候使用...操作符来iterate这个生成器，打印1-30之间6的倍数。
```
var luckyNumbers = {
  *lucky({
    start = 0,
    end = 100,
    step = 1
  } = {}) {
    for (let i = start; i <= end; i+= step) {
      yield i;
    }
  }
};

console.log(`My lucky numbers are: ${
  [...luckyNumbers.lucky({
    start: 6,
    end: 30,
    step: 4
  })]
}`)

//My lucky numbers are: 6,10,14,18,22,26,30

```

## Async Await

### Async出现的历史
这里有一个例子，我们先请求当前当前用户，获得用户数据以后，又请求当前用户所下过订单和进行中的订单的例子。

以前用Promise的时候,使用链式then()来处理这种连续请求。

```
fetchCurrentUser()
  .then(function onUser(user) {
    //获得当前用户
    return Promise.all([
      //用Promise.all来做两个请求，返回的还是一个promise，如果有一个请求中有一个reject则都reject

      fetchArchivedOrders( user.id ),
      fetchCurrentOrders (user.id)
    ]);
  })
```

后来我们有人不再用链式then()来处理多个请求。而是用generator来获得多个请求的response。一个generator可以yield一个promise，并且等待yield结果以后再进行下一步。但是这个方法一般要使用第三方库的一种runner函数进行，像Co，Koa都有。runner函数的作用就是在yield的时候等待结果resolve，然后再往下iterate，往下yield。

```
runner(function *main() {
  var user = yield fetchCurrentUser();
  var [ archivedOrders, currentOrders ] = yield Promise.all([
    fetchArchivedOrders( user.id ),
    fetchArchivedOrders( user.id )
  ])
});

```
其实上面这个例子里的yield关键词，已经很像await关键词了，所以后来JS官方就推出了Async Await关键词，不再需要用第三方库的runner函数。

```
async function main() {
  var user = await fectchCurrentUser();
  var [archiveOrders, currentOrders] = await Promise.all([
    fetchArchiveOrders(user.id),
    fetchCurrentOrders(user.id)
  ]);

  return archiveOrders + currentOrders;
}
```

这里有个例子，我们同时请求三个file，但是保证打印结果是按顺序打印，也没有undefined。并且一请求到就立即打印结果，并不等待后续的请求完成。

```
function getFile(file) {
  return new Promise(function(resolve){
    fakeAjax(file,resolve);
  });
}

async function loadFiles(files) {
  
  var prs = files.map(getFile);
  //用map同时做三个请求
  
  

  for (let pr of prs) {
    console.log(await pr);
  }
  //在for loop中加入await关键词,来确保按顺序打印，也不会undefined。
  
}

loadFiles(["files","file2","file3"])；
```

### async await problems

async await也有一些问题

* await只能应对Promise

* Starvation
promise会在时间循环中排进microtask,会造成饥饿陷阱，这里不多写。

* cancelation

Async函数是没有办法被手动取消的，比如一个request要下载巨大的文件，async函数过程就会一直进行





