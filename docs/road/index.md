# 知识积累

## 数据

- [百度统计流量研究院](https://tongji.baidu.com/research/site#profile)

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
(1). 事件捕获阶段
(2). 事件目标阶段
(3). 事件冒泡阶段
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

### 事件循环

### 浏览器BOM API

### 性能

![null](/img/road/1.jpg)

## 计算机网络

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

### 布局

### 图像

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
链接：https://juejin.im/post/5e22b391f265da3e204d8c14
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

### 引用和操作符优先级

### 原型和继承

### this

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

## 开发框架

### Vue

### React

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
