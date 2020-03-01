# 知识积累

## 常用官方网站

- [百度统计流量研究院](https://tongji.baidu.com/research/site#profile)
- [W3Techs](https://w3techs.com/)
- [web技术册](https://platform.html5.org/)
- [腾讯云开发者手册](https://cloud.tencent.com/developer/devdocs)

## 浏览器

### 浏览器内核

#### 内核介绍

1. 浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS 引擎。

2. 渲染引擎 它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。

3. JS 引擎 则是解析 Javascript 语言，执行 javascript语言来实现网页的动态效果。

4. 最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。有一个网页标准计划小组制作了一个 ACID 来测试引擎的兼容性和性能。

#### 内核的分类

浏览器的内核的种类很多，常见的浏览器内核可以分为四种：Trident、Gecko、Blink、Webkit。

1. Trident (IE内核)

    国内很多的双核浏览器的其中一核便是 Trident，美其名曰 "兼容模式"。

    代表： IE、傲游、世界之窗浏览器、Avant、腾讯TT、猎豹安全浏览器、360极速浏览器、百度浏览器等。
    Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。

2. Gecko(firefox)

    Mozilla FireFox(火狐浏览器) 采用该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。

    可惜这几年已经没落了， 比如 打开速度慢、升级频繁。

3. webkit(Safari)

    Safari 是苹果公司开发的浏览器，所用浏览器内核的名称是大名鼎鼎的 WebKit。

    代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器。

4. Chromium/Bink(chrome)

    在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。

    大部分国产浏览器最新版都采用Blink内核。

5. Presto (Opera)

    Presto 是挪威产浏览器 opera 的 "前任" 内核，最新的 opera 浏览器早已将之抛弃从而投入到了谷歌怀抱了。

#### 移动端的浏览器

目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等。

其中 iPhone 和 iPad 等苹果 iOS 平台主要是 WebKit；

Android 4.4 之前的 Android 系统浏览器内核是 WebKit；

Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink；

Windows Phone 8 系统浏览器内核是 Trident。

### 事件模型

此模型是W3C制定的标准模型，现代浏览器（IE6~8除外）都已经遵循这个规范。W3C制定的事件模型中，一次事件的发生包含三个过程：

1. 事件捕获阶段
2. 事件目标阶段
3. 事件冒泡阶段

![事件模型](/img/road/1.png)

事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应的监听函数是不会被触发的。

事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

事件冒泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数都会被一次触发。
所有的事件类型都会经历事件捕获但是只有部分事件会经历事件冒泡阶段,例如submit事件就不会被冒泡。

事件的传播是可以阻止的：

- 在W3c中，使用stopPropagation（）方法
- 在IE下设置cancelBubble = true；

在捕获的过程中stopPropagation（）；后，后面的冒泡过程就不会发生了。

标准的事件监听器该如何绑定：

addEventListener("eventType","handler","true|false");其中eventType指事件类型，注意不要加‘on’前缀，与IE下不同。第二个参数是处理函数，第三个即用来指定是否在捕获阶段进行处理，一般设为false来与IE保持一致(默认设置)，除非你有特殊的逻辑需求。监听器的解除也类似：removeEventListner("eventType","handler","true!false");

### 浏览器BOM API

### 性能

![null](/img/road/1.jpg)

## 计算机网络

### 网络模型

- TCP/IP 四层模型
- OSI 七层模型

### TCP/UDP

### HTTP/HTTPS

超文本传输​​协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的客户端-服务端模型，客户端打开一个连接以发出请求，然后等待它收到服务器端响应。HTTP 是无状态协议，这意味着服务器不会在两个请求之间保留任何数据（状态）。该协议虽然通常基于 TCP/IP 层，但可以在任何可靠的传输层上使用；也就是说，不像 UDP，它是一个不会静默丢失消息的协议。RUDP——作为 UDP 的可靠化升级版本——是一种合适的替代选择。

### DNS

## AST

在计算机科学中，抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

抽象语法树（AST）是代码运行最核心的知识点，是js里最底层的部分，再往下拆解就是转换和编译的知识了。

举个例子：

``` js
function add(a, b) {
    return a + b
}
```

这段代码拆解为AST应该是这样：

``` js
FunctionDeclaration {
    type: 'FunctionDeclaration',
    name: 'add'
    params: [
      {
        type: 'identifier',
        name: 'a',
      },
      {
        type: 'identifier',
        name: 'b',
      },
    ],
    body: Blockstatement {
      type: 'BlockStatement',
      body: ReturnStatement {
        type: 'ReturnStatement',
        body: BinaryExpression {
          left: 'a',
          operator: '+',
          right: 'b',
        }
      }
    }
}
```

这只是最简单的样式，但是实际AST中包含很多信息。而这些标准都可以在[MDN/Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API#Node_objects)以及[The ESTree Spec](https://github.com/estree/estree)中查找到。

如果想看详细的案例，也可以在[AST Explorer](https://astexplorer.net/)中查看。

### parser

parser即解释器，通过解释器就可以将js源码转换为AST结构。

常见的解释器有：

- esprima
- traceur
- acorn
- shift

## HTML

### Web存储

localStorage 和 sessionStorage：

- localStorage

用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。

- sessionStorage

用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

### Web缓存

#### Manifest

### WebSocket

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

### Canvas

HTML5 \<canvas> 标签用于绘制图像（通过脚本，通常是 JavaScript）。

## CSS

### 文章

- [掘金-老姚 你未必知道的49个知识点](https://juejin.im/post/5d3eca78e51d4561cb5dde12)
- [掘金-老姚 你未必知道的知识点(第二季)](https://juejin.im/post/5d9ec8b0518825651b1dffa3)

### 盒模型

盒模型分为IE盒模型和标准盒模型。

1. 标准盒模型：
2. IE 盒模型：

### 布局

CSS 布局模式，有时简称为布局，是一种基于盒子与其兄弟和祖辈盒子的交互方式来确定盒子的位置和大小的算法。有以下几种形式：

块布局：用来布置文件。块布局包含以文档为中心的功能，例如 浮动元素或将其放置在多列上的功能。

行内布局：用来布置文本。

表格布局：用来布置表格。

定位布局：用来对那些与其他元素无交互的定位元素进行布置 。

弹性盒子布局：用来布置那些可以顺利调整大小的复杂页面。

网格布局：用来布置那些与一个固定网格相关的元素。

## JS

### 运行机制

#### 进程与线程

什么是进程

我们都知道，CPU是计算机的核心，承担所有的计算任务

官网说法，进程是CPU资源分配的最小单位

字面意思就是进行中的程序，我将它理解为一个可以独立运行且拥有自己的资源空间的任务程序

进程包括运行中的程序和程序所使用到的内存和系统资源

CPU可以有很多进程，我们的电脑每打开一个软件就会产生一个或多个进程，为什么电脑运行的软件多就会卡，是因为CPU给每个进程分配资源空间，但是一个CPU一共就那么多资源，分出去越多，越卡，每个进程之间是相互独立的，CPU在运行一个进程时，其他的进程处于非运行状态，CPU使用 时间片轮转调度算法 来实现同时运行多个进程
什么是线程

线程是CPU调度的最小单位

线程是建立在进程的基础上的一次程序运行单位，通俗点解释线程就是程序中的一个执行流，一个进程可以有多个线程

一个进程中只有一个执行流称作单线程，即程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行

一个进程中有多个执行流称作多线程，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，
也就是说允许单个程序创建多个并行执行的线程来完成各自的任务

进程和线程的区别

进程是操作系统分配资源的最小单位，线程是程序执行的最小单位

一个进程由一个或多个线程组成，线程可以理解为是一个进程中代码的不同执行路线

进程之间相互独立，但同一进程下的各个线程间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)

调度和切换：线程上下文切换比进程上下文切换要快得多

多进程和多线程

多进程：多进程指的是在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态。多进程带来的好处是明显的，比如大家可以在网易云听歌的同时打开编辑器敲代码，编辑器和网易云的进程之间不会相互干扰

多线程：多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，也就是说允许单个程序创建多个并行执行的线程来完成各自的任务

#### JS为什么是单线程

JS的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

还有人说js还有Worker线程，对的，为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程是完 全受主线程控制的，而且不得操作DOM

所以，这个标准并没有改变JavaScript是单线程的本质

了解了进程和线程之后，接下来看看浏览器解析，浏览器之间也是有些许差距的，不过大致是差不多的，下文我们皆用市场占有比例最大的Chrome为例

作者：isboyjc
链接：[链接](https://juejin.im/post/5e22b391f265da3e204d8c14)
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 内置类型

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象(Object)、数组(Array)、函数(Function)。

::: tip 注意

Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

:::

### 作用域与闭包

在 JavaScript 中, 对象和函数同样也是变量。

在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。

JavaScript 函数作用域: 作用域在函数内修改。

### 操作符优先级

下面的表将所有运算符按照优先级的不同从高（20）到低（1）排列。

|优先级|运算类型|关联性|运算符|
|:--|:--|:--|:--|
|20|圆括号|n/a（不相关）|( … )|
|19|成员访问|从左到右|… . …|
||需计算的成员访问|从左到右|… [ … ]|
||new (带参数列表)|n/a|new … ( … )|
||函数调用|从左到右|… ( … )|
||可选链（Optional chaining）|从左到右|?.|
|18|new (无参数列表)|从右到左|new …|
|17|后置递增(运算符在后)|n/a|… ++|
||后置递减(运算符在后)|n/a|… --|
|16|逻辑非|从右到左|! …|
||按位非|从右到左|~ …|
||一元加法|从右到左|+ …|
||一元减法|从右到左|- …|
||前置递增|从右到左|++ …|
||前置递减|从右到左|-- …|
||typeof|从右到左|typeof …|
||void|从右到左|void …|
||delete|从右到左|delete …|
||await|从右到左|await …|
|15|幂|从右到左|… ** …|
|14|乘法|从左到右|… * …|
||除法|从左到右|… / …|
||取模|从左到右|… % …|
|13|加法|从左到右|… + …|
||减法|从左到右|… - …|
|12|按位左移|从左到右|… << …|
||按位右移|从左到右|… >> …|
||无符号右移|从左到右|… >>> …|
|11|小于|从左到右|… < …|
||小于等于|从左到右|… <= …|
||大于|从左到右|… > …|
||大于等于|从左到右|… >= …|
||in|从左到右|… in …|
||instanceof|从左到右|… instanceof …|
|10|等号|从左到右|… == …|
||非等号|从左到右|… != …|
||全等号|从左到右|… === …|
||非全等号|从左到右|… !== …|
|9|按位与|从左到右|… & …|
|8|按位异或|从左到右|… ^ …|
|7|按位或|从左到右|… | …|
|6|逻辑与|从左到右|… && …|
|5|逻辑或|从左到右|… || …|
|4|条件运算符|从右到左|… ? … : …|
|3|赋值|从右到左|… = …|
|||从右到左|… += …|
|||从右到左|… -= …|
|||从右到左|… *= …|
|||从右到左|… /= …|
|||从右到左|… %= …|
|||从右到左|… <<= …|
|||从右到左|… >>= …|
|||从右到左|… >>>= …|
|||从右到左|… &= …|
|||从右到左|… ^= …|
|||从右到左|… |= …|
|2|yield|从右到左|yield …|
||yield*|从右到左|yield* …|
|1|展开运算符|n/a|... …|
|0|逗号|从左到右|… , …|

### 原型和继承

![原型链](https://user-gold-cdn.xitu.io/2020/2/19/1705cd422ba707f0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 基于原型链的继承

继承属性

JavaScript 对象是动态的属性“包”（指其自己的属性）。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

>遵循ECMAScript标准，someObject.[[Prototype]] 符号是用于指向 someObject 的原型。从 ECMAScript 6 开始，[[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 __proto__。
>
>但它不应该与构造函数 func 的 prototype 属性相混淆。被构造函数创建的实例对象的 [[prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示 Object 的原型对象。

这里演示当尝试访问属性时会发生什么：

```js
// 让我们从一个自身拥有属性a和b的函数里创建一个对象o：
let f = function () {
   this.a = 1;
   this.b = 2;
}
/* 这么写也一样
function f() {
  this.a = 1;
  this.b = 2;
}
*/
let o = new f(); // {a: 1, b: 2}

// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
// o.[[Prototype]] 有属性 b 和 c
//  (其实就是 o.__proto__ 或者 o.constructor.prototype)
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最后o.[[Prototype]].[[Prototype]].[[Prototype]]是null
// 这就是原型链的末尾，即 null，
// 根据定义，null 就是没有 [[Prototype]]。

// 综上，整个原型链如下:

// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(o.a); // 1
// a是o的自身属性吗？是的，该属性的值为 1

console.log(o.b); // 2
// b是o的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c); // 4
// c是o的自身属性吗？不是，那看看它的原型上有没有
// c是o.[[Prototype]]的属性吗？是的，该属性的值为 4

console.log(o.d); // undefined
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined
```

给对象设置属性会创建自有属性。获取和设置属性的唯一限制是内置 getter 或 setter 的属性。

继承方法

JavaScript 并没有其他基于类的语言所定义的“方法”。在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别，包括上面的“属性遮蔽”（这种情况相当于其他语言的方法重写）。

当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象。

```js
var o = {
  a: 2,
  m: function(){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// 当调用 o.m 时，'this' 指向了 o.

var p = Object.create(o);
// p是一个继承自 o 的对象

p.a = 4; // 创建 p 的自身属性 'a'
console.log(p.m()); // 5
// 调用 p.m 时，'this' 指向了 p
// 又因为 p 继承了 o 的 m 函数
// 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a'
```

#### 在 JavaScript 中使用原型

接下去，来仔细分析一下这些应用场景下， JavaScript 在背后做了哪些事情。

正如之前提到的，在 JavaScript 中，函数（function）是允许拥有属性的。所有的函数会有一个特别的属性 —— prototype 。请注意，以下的代码是独立的（出于严谨，假定页面没有其他的JavaScript代码）。为了最佳的学习体验，我们强烈建议阁下打开浏览器的控制台（在Chrome和火狐浏览器中，按Ctrl+Shift+I即可），进入“console”选项卡，然后把如下的JavaScript代码复制粘贴到窗口中，最后通过按下回车键运行代码。

```js
function doSomething(){}
console.log( doSomething.prototype );
// 和声明函数的方式无关，
// JavaScript 中的函数永远有一个默认原型属性。
var doSomething = function(){};
console.log( doSomething.prototype );
```

在控制台显示的JavaScript代码块中，我们可以看到doSomething函数的一个默认属性prototype。而这段代码运行之后，控制台应该显示类似如下的结果：

```js
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

我们可以给doSomething函数的原型对象添加新属性，如下：

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```

可以看到运行后的结果如下：

```js
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

现在我们可以通过new操作符来创建基于这个原型对象的doSomething实例。使用new操作符，只需在调用doSomething函数语句之前添加new。这样，便可以获得这个函数的一个实例对象。一些属性就可以添加到该原型对象中。

请尝试运行以下代码：

```js
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );
```

运行的结果类似于以下的语句。

```js
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

如上所示, doSomeInstancing 中的__proto__是 doSomething.prototype. 但这是做什么的呢？当你访问doSomeInstancing 中的一个属性，浏览器首先会查看doSomeInstancing 中是否存在这个属性。

如果 doSomeInstancing 不包含属性信息, 那么浏览器会在 doSomeInstancing 的 __proto__ 中进行查找(同 doSomething.prototype). 如属性在 doSomeInstancing 的 __proto__ 中查找到，则使用 doSomeInstancing 中 __proto__ 的属性。

否则，如果 doSomeInstancing 中 __proto__ 不具有该属性，则检查doSomeInstancing 的 __proto__ 的  __proto__ 是否具有该属性。默认情况下，任何函数的原型属性 __proto__ 都是 window.Object.prototype. 因此, 通过doSomeInstancing 的 __proto__ 的  __proto__  ( 同 doSomething.prototype 的 __proto__ (同  Object.prototype)) 来查找要搜索的属性。

如果属性不存在 doSomeInstancing 的 __proto__ 的  __proto__ 中， 那么就会在doSomeInstancing 的 __proto__ 的  __proto__ 的  __proto__ 中查找。然而, 这里存在个问题：doSomeInstancing 的 __proto__ 的  __proto__ 的  __proto__ 其实不存在。因此，只有这样，在 __proto__ 的整个原型链被查看之后，这里没有更多的 __proto__ ， 浏览器断言该属性不存在，并给出属性值为 undefined 的结论。

让我们在控制台窗口中输入更多的代码，如下：

```js
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```

结果如下：

```js
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

#### 使用不同的方法来创建对象和生成原型链

使用语法结构创建的对象

```js
var o = {a: 1};

// o 这个对象继承了 Object.prototype 上面的所有属性
// o 自身没有名为 hasOwnProperty 的属性
// hasOwnProperty 是 Object.prototype 的属性
// 因此 o 继承了 Object.prototype 的 hasOwnProperty
// Object.prototype 的原型为 null
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 数组都继承于 Array.prototype
// (Array.prototype 中包含 indexOf, forEach 等方法)
// 原型链如下:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// 函数都继承于 Function.prototype
// (Function.prototype 中包含 call, bind等方法)
// 原型链如下:
// f ---> Function.prototype ---> Object.prototype ---> null
```

使用构造器创建的对象

在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造方法（构造函数）。

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。
```

使用 Object.create 创建的对象

ECMAScript 5 中引入了一个新方法：Object.create()。可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数：

```js
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
```

使用 class 关键字创建的对象

ECMAScript6 引入了一套新的关键字用来实现 class。使用基于类语言的开发人员会对这些结构感到熟悉，但它们是不同的。JavaScript 仍然基于原型。这些新的关键字包括 class, constructor，static，extends 和 super。

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

性能

在原型链上查找属性比较耗时，对性能有副作用，这在性能要求苛刻的情况下很重要。另外，试图访问不存在的属性时会遍历整个原型链。

遍历对象的属性时，原型链上的每个可枚举属性都会被枚举出来。要检查对象是否具有自己定义的属性，而不是其原型链上的某个属性，则必须使用所有对象从 Object.prototype 继承的 hasOwnProperty 方法。下面给出一个具体的例子来说明它：

```js
console.log(g.hasOwnProperty('vertices'));
// true

console.log(g.hasOwnProperty('nope'));
// false

console.log(g.hasOwnProperty('addVertex'));
// false

console.log(g.__proto__.hasOwnProperty('addVertex'));
// true
```

hasOwnProperty 是 JavaScript 中唯一一个处理属性并且不会遍历原型链的方法。（译者注：原文如此。另一种这样的方法：Object.keys()）

>注意：检查属性是否为 undefined 是不能够检查其是否存在的。该属性可能已存在，但其值恰好被设置成了 undefined。

### this

与其他语言相比，函数的 this 关键字在 JavaScript 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别。

在绝大多数情况下，函数的调用方式决定了this的值。this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同。ES5引入了bind方法来设置函数的this值，而不用考虑函数如何被调用的，ES2015 引入了支持this词法解析的箭头函数（它在闭合的执行环境内设置this的值）。

this：当前执行代码的环境对象。

#### 全局环境

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象。

```js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

#### 函数（运行内）环境

在函数内部，this的值取决于函数被调用的方式。

简单调用

因为下面的代码不在严格模式下，且 this 的值不是由该调用设置的，所以 this 的值默认指向全局对象。

```js
function f1(){
  return this;
}
//在浏览器中：
f1() === window;   //在浏览器中，全局对象是window

//在Node中：
f1() === global;
```

然而，在严格模式下，this将保持他进入执行环境时的值，所以下面的this将会默认为undefined。

```js
function f2(){
  "use strict"; // 这里是严格模式
  return this;
}

f2() === undefined; // true
```

所以，在严格模式下，如果 this 没有被执行环境（execution context）定义，那它将保持为 undefined。

>在第二个例子中，this的确应该是undefined，因为f2是被直接调用的，而不是作为对象的属性或方法调用的（如 window.f2()）。有一些浏览器最初在支持严格模式时没有正确实现这个功能，于是它们错误地返回了window对象。

如果要想把 this 的值从一个环境传到另一个，就要用 call 或者apply 方法。

```js
// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = {a: 'Custom'};

// 这个属性是在global对象定义的。
var a = 'Global';

function whatsThis(arg) {
  return this.a;  // this的值取决于函数的调用方式
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

当一个函数在其主体中使用 this 关键字时，可以通过使用函数继承自Function.prototype 的 call 或 apply 方法将 this 值绑定到调用中的特定对象。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// 第一个参数是作为‘this’使用的对象
// 后续参数作为参数传递给函数调用
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// 第一个参数也是作为‘this’使用的对象
// 第二个参数是一个数组，数组里的元素用作函数调用中的参数
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

使用 call 和 apply 函数的时候要注意，如果传递给 this 的值不是一个对象，JavaScript 会尝试使用内部 ToObject 操作将其转换为对象。因此，如果传递的值是一个原始值比如 7 或 'foo'，那么就会使用相关构造函数将它转换为对象，所以原始值 7 会被转换为对象，像 new Number(7) 这样，而字符串 'foo' 转化成 new String('foo') 这样，例如：

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

//原始值 7 被隐式转换为对象
bar.call(7); // [object Number]
```

bind方法

ECMAScript 5 引入了 Function.prototype.bind。调用f.bind(someObject)会创建一个与f具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。

```js
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a:37, f:f, g:g, h:h};
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty
```

箭头函数

在箭头函数中，this与封闭词法环境的this保持一致。在全局代码中，它将被设置为全局对象：

```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

>注意：如果将this传递给call、bind、或者apply，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（thisArg）应该设置为null。

```js
// 接着上面的代码
// 作为对象的一个方法调用
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用bind来设定this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

无论如何，foo 的 this 被设置为他被创建时的环境（在上面的例子中，就是全局对象）。这同样适用于在其他函数内创建的箭头函数：这些箭头函数的this被设置为封闭的词法环境的。

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
```

在上面的例子中，一个赋值给了 obj.bar的函数（称为匿名函数 A），返回了另一个箭头函数（称为匿名函数 B）。因此，在 A 调用时，函数B的this被永久设置为obj.bar（函数A）的this。当返回的函数（函数B）被调用时，它this始终是最初设置的。在上面的代码示例中，函数B的this被设置为函数A的this，即obj，所以即使被调用的方式通常将其设置为 undefined 或全局对象（或者如前面示例中的其他全局执行环境中的方法），它的 this 也仍然是 obj 。

作为对象的方法

当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。

下面的例子中，当 o.f()被调用时，函数内的this将绑定到o对象。

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
```

请注意，这样的行为，根本不受函数定义方式或位置的影响。在前面的例子中，我们在定义对象o的同时，将函数内联定义为成员 f 。但是，我们也可以先定义函数，然后再将其附属到o.f。这样做会导致相同的行为：

```js
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
```

这表明函数是从o的f成员调用的才是重点。

同样，this 的绑定只受最靠近的成员引用的影响。在下面的这个例子中，我们把一个方法g当作对象o.b的函数调用。在这次执行期间，函数中的this将指向o.b。事实证明，这与他是对象 o 的成员没有多大关系，最靠近的引用才是最重要的。

```js
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

原型链中的 this

对于在对象原型链上某处定义的方法，同样的概念也适用。如果该方法存在于一个对象的原型链上，那么this指向的是调用这个方法的对象，就像该方法在对象上一样。

var o = {
  f: function() {
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

在这个例子中，对象p没有属于它自己的f属性，它的f属性继承自它的原型。虽然在对 f 的查找过程中，最终是在 o 中找到 f 属性的，这并没有关系；查找过程首先从 p.f 的引用开始，所以函数中的 this 指向p。也就是说，因为f是作为p的方法调用的，所以它的this指向了p。这是 JavaScript 的原型继承中的一个有趣的特性。

getter 与 setter 中的 this

再次，相同的概念也适用于当函数在一个 getter 或者 setter 中被调用。用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。

```js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // logs 2, 6
```

作为构造函数

当一个函数用作构造函数时（使用new关键字），它的this被绑定到正在构造的新对象。

>虽然构造器返回的默认值是this所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回this对象）。

```js
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
```

在刚刚的例子中（C2），因为在调用构造函数的过程中，手动的设置了返回对象，与this绑定的默认对象被丢弃了。（这基本上使得语句 “this.a = 37;”成了“僵尸”代码，实际上并不是真正的“僵尸”，这条语句执行了，但是对于外部没有任何影响，因此完全可以忽略它）。

作为一个DOM事件处理函数

当函数被用作事件处理函数时，它的this指向触发事件的元素（一些浏览器在使用非addEventListener的函数动态添加监听函数时不遵守这个约定）。

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e){
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*');

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

作为一个内联事件处理函数

当代码被内联on-event 处理函数调用时，它的this指向监听器所在的DOM元素：

```js
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

上面的 alert 会显示button。注意只有外层代码中的this是这样设置的：

```js
<button onclick="alert((function(){return this})());">
  Show inner this
</button>
```

在这种情况下，没有设置内部函数的this，所以它指向 global/window 对象（即非严格模式下调用的函数未设置this时指向的默认对象）。

### 执行上下文（EC）

### 正则表达式

正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

搜索模式可用于文本搜索和文本替换。

语法：`/正则表达式主体/修饰符(可选)`

正则表达式修饰符(修饰符可以在全局搜索中不区分大小写):
|修饰符|描述|
|--|--|
|i|执行对大小写不敏感的匹配。|
|g|执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。|
|m|执行多行匹配。|

正则表达式模式:

方括号用于查找某个范围内的字符：

|表达式|描述|
|--|--|
|[abc]|查找方括号之间的任何字符。|
|[^abc]|查找任何不在方括号之间的字符。|
|[0-9]|查找任何从 0 至 9 的数字。|
|[a-z]|查找任何从小写 a 到小写 z 的字符。|
|[A-Z]|查找任何从大写 A 到大写 Z 的字符。|
|[A-z]|查找任何从大写 A 到小写 z 的字符。|
|[adgk]|查找给定集合内的任何字符。|
|[^adgk]|查找给定集合外的任何字符。|
|(red\|blue\|green)|查找任何指定的选项。|

元字符是拥有特殊含义的字符：

|元字符|描述|
|--|--|
|.|查找单个字符，除了换行和行结束符。|
|\w|查找单词字符。|
|\W|查找非单词字符。|
|\d|查找数字。|
|\D|查找非数字字符。|
|\s|查找空白字符。|
|\S|查找非空白字符。|
|\b|匹配单词边界。|
|\B|匹配非单词边界。|
|\0|查找 NUL 字符。|
|\n|查找换行符。|
|\f|查找换页符。|
|\r|查找回车符。|
|\t|查找制表符。|
|\v|查找垂直制表符。|
|\xxx|查找以八进制数 xxx 规定的字符。|
|\xdd|查找以十六进制数 dd 规定的字符。|
|\uxxxx|查找以十六进制数 xxxx 规定的 Unicode 字符。|

量词:

|量词|描述|
|--|--|
|n+|匹配任何包含至少一个 n 的字符串。|
|n*|匹配任何包含零个或多个 n 的字符串。|
|n?|匹配任何包含零个或一个 n 的字符串。|
|n{X}|匹配包含 X 个 n 的序列的字符串。|
|n{X,Y}|匹配包含 X 至 Y 个 n 的序列的字符串。|
|n{X,}|匹配包含至少 X 个 n 的序列的字符串。|
|n$|匹配任何结尾为 n 的字符串。|
|^n|匹配任何开头为 n 的字符串。|
|?=n|匹配任何其后紧接指定字符串 n 的字符串。|
|?!n|匹配任何其后没有紧接指定字符串 n 的字符串。|

RegExp 对象属性:

|属性|描述|
|--|--|
|global|RegExp 对象是否具有标志 g。|
|ignoreCase|RegExp 对象是否具有标志 i。|
|lastIndex|一个整数，标示开始下一次匹配的字符位置。|
|multiline|RegExp 对象是否具有标志 m。|
|source|正则表达式的源文本。|

支持正则表达式的 String 对象的方法:

|方法|描述|
|--|--|
|search|检索与正则表达式相匹配的值。|
|match|找到一个或多个正则表达式的匹配。|
|replace|替换与正则表达式匹配的子串。|
|split|把字符串分割为字符串数组。|

### 事件循环

JavaScript 的并发模型基于“事件循环”。这个模型与像 C 或者 Java 这种其它语言中的模型截然不同。

#### 运行时概念

下面的内容解释了一个理论模型。现代 JavaScript 引擎实现并着重优化了所描述的这些语义。

##### 可视化描述

![runtime](https://developer.mozilla.org/files/4617/default.svg)

##### 栈

函数调用形成了一个栈帧。

```js
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42
```

当调用 bar 时，创建了第一个帧 ，帧中包含了 bar 的参数和局部变量。当 bar 调用 foo 时，第二个帧就被创建，并被压到第一个帧之上，帧中包含了 foo 的参数和局部变量。当 foo 返回时，最上层的帧就被弹出栈（剩下 bar 函数的调用帧 ）。当 bar 返回的时候，栈就空了。

##### 堆

对象被分配在一个堆中，即用以表示一大块非结构化的内存区域。

##### 队列

一个 JavaScript 运行时包含了一个待处理的消息队列。每一个消息都关联着一个用以处理这个消息的函数。

在事件循环期间的某个时刻，运行时从最先进入队列的消息开始处理队列中的消息。为此，这个消息会被移出队列，并作为输入参数调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。

函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。

#### 事件循环

之所以称之为事件循环，是因为它经常按照类似如下的方式来被实现：

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

如果当前没有任何消息，queue.waitForMessage() 会同步地等待消息到达。

##### "执行至完成"

每一个消息完整地执行后，其它消息才会被执行。这为程序的分析提供了一些优秀的特性，包括：一个函数执行时，它永远不会被抢占，并且在其他代码运行之前完全运行（且可以修改此函数操作的数据）。这与C语言不同，例如，如果函数在线程中运行，它可能在任何位置被终止，然后在另一个线程中运行其他代码。

这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web应用就无法处理用户的交互，例如点击或滚动。浏览器用“程序需要过长时间运行”的对话框来缓解这个问题。一个很好的做法是缩短消息处理，并在可能的情况下将一个消息裁剪成多个消息。

##### 添加消息

在浏览器里，当一个事件发生且有一个事件监听器绑定在该事件上时，消息会被随时添加进队列。如果没有事件监听器，事件会丢失。所以点击一个附带点击事件处理函数的元素会添加一个消息，其它事件类似。

函数 setTimeout 接受两个参数：待加入队列的消息和一个延迟（可选，默认为 0）。这个延迟代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。

下面的例子演示了这个概念（setTimeout 并不会在计时器到期之后直接执行）：

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

##### 零延迟

零延迟并不意味着回调会立即执行。以 0 为第二参数调用 setTimeout 并不表示在 0 毫秒后就立即调用回调函数。

其等待的时间取决于队列里待处理的消息数量。在下面的例子中，"这是一条消息" 将会在回调获得处理之前输出到控制台，这是因为延迟参数是运行时处理请求所需的最小等待时间，但并不保证是准确的等待时间。

基本上，setTimeout 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。

```js
(function() {

  console.log('这是开始');

  setTimeout(function cb() {
    console.log('这是来自第一个回调的消息');
  });

  console.log('这是一条消息');

  setTimeout(function cb1() {
    console.log('这是来自第二个回调的消息');
  }, 0);

  console.log('这是结束');

})();

// "这是开始"
// "这是一条消息"
// "这是结束"
// 此处，函数返回了 undefined
// "这是来自第一个回调的消息"
// "这是来自第二个回调的消息"
```

##### 多个运行时互相通信

一个 web worker 或者一个跨域的 iframe 都有自己的栈，堆和消息队列。两个不同的运行时只能通过 postMessage 方法进行通信。如果另一个运行时侦听 message 事件，则此方法会向该运行时添加消息。

#### 永不阻塞

事件循环模型的一个非常有趣的特性是，与许多其他语言不同，JavaScript 永不阻塞。 处理 I/O 通常通过事件和回调来执行，所以当一个应用正等待一个 IndexedDB 查询返回或者一个 XHR 请求返回时，它仍然可以处理其它事情，比如用户输入。

遗留的例外是存在的，如 alert 或者同步 XHR，但应该尽量避免使用它们。注意，例外的例外也是存在的（但通常是实现错误而非其它原因）。

## 开发框架

### Vue

#### 生命周期

### React

#### 生命周期

## 跨平台开发

### WEEX

### Flutter

### Electron

## 服务器端渲染(SSR)

### Nuxt.js

### Next.js

## UI框架

### Ant-design

### element

## runtime

### node.js

## 打包工具

### Webpack

### Rollup

## 转译工具

### Babel

## 语法检查

### ESlint

## 代码格式化

### Prettier

## CSS预编译器

### Less

### Sass
