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

    Mozilla FireFox(火狐浏览器) 采用该内核，Gecko 的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。 可惜这几年已经没落了， 比如 打开速度慢、升级频繁。

3. webkit(Safari)

    Safari 是苹果公司开发的浏览器，所用浏览器内核的名称是大名鼎鼎的 WebKit。
    代表浏览器：傲游浏览器3、 Apple Safari (Win/Mac/iPhone/iPad)、Symbian手机浏览器、Android 默认浏览器。

4. Chromium/Bink(chrome)

    在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用Blink内核。

5. Presto (Opera)

    Presto 是挪威产浏览器 opera 的 "前任" 内核，最新的 opera 浏览器早已将之抛弃从而投入到了谷歌怀抱了。

#### 移动端的浏览器

目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等。

其中 iPhone 和 iPad 等苹果 iOS 平台主要是 WebKit；

Android 4.4 之前的 Android 系统浏览器内核是 WebKit；

Android4.4 系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink；

Windows Phone 8 系统浏览器内核是 Trident。

### 浏览器事件模型

### 浏览器事件循环

### 浏览器BOM API

## CSS

### 文章

- [掘金-老姚 你未必知道的49个知识点](https://juejin.im/post/5d3eca78e51d4561cb5dde12)
- [掘金-老姚 你未必知道的知识点(第二季)](https://juejin.im/post/5d9ec8b0518825651b1dffa3)

## JS

### 内置类型

### 作用域与闭包

### 引用和操作符优先级

### 原型和继承

### this

### 执行上下文（EC）

## 框架

### Vue

#### vue.$set及vue.$delete

[官网示例](https://cn.vuejs.org/v2/api/#Vue-set)

在我们使用vue进行开发的过程中，可能会遇到一种情况：当生成vue实例后，当再次给数据赋值时，有时候并不会自动更新到视图上去；
当我们去看vue文档的时候，会发现有这么一句话：如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。

如下代码，给 student对象新增 age 属性

```js
data () {
    return {
        student: {
            name: '',
            sex: ''
        }
    }
},
mounted () {
    this.student.age = 24
}
```

原因是：受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。

要处理这种情况，我们可以使用$set()方法，既可以新增属性,又可以触发视图更新。

this.$set(this.data,”key”,value’)

```js
mounted () {
    this.$set(this.student,"age", 24)
}
```
