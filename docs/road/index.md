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

## 原理

### AST

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

### 盒模型

## CSS

### 文章

- [掘金-老姚 你未必知道的49个知识点](https://juejin.im/post/5d3eca78e51d4561cb5dde12)
- [掘金-老姚 你未必知道的知识点(第二季)](https://juejin.im/post/5d9ec8b0518825651b1dffa3)

### 预编译器

## JS

### 内置类型

### 作用域与闭包

### 引用和操作符优先级

### 原型和继承

### this

### 执行上下文（EC）

## 开发框架

### Vue

### React

## 跨平台开发

### WEEX

### Flutter

### Electron

## UI框架

### Ant-design

### element
