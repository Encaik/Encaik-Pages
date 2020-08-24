# Echarts 的使用及配置项使用

## 使用

- 标签引入

[在 Github 获取 Echarts](https://github.com/apache/incubator-echarts/releases)

- npm

```sh
npm install echarts --save
```

```js
var echarts = require("echarts");
```

### 准备容器

```html
<body>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="main" style="width:600px;height:400px;"></div>
</body>
```

这个 div 就是 Echarts 使用的容器，Echarts 将会生成一个相同大小的 canvas 标签插入到 div 中，通过 id 获取位置，所以如果页面中有多个图表，容器的 id 是不可以重复的。

### 初始化及添加配置项

```js
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("main"));

// 指定图表的配置项和数据
var option = {
  title: {
    text: "ECharts 入门示例"
  },
  tooltip: {},
  legend: {
    data: ["销量"]
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
```

可以看到插入图表的操作很简单，可以分为两步：

1. 通过 id 找到容易，声明 echarts 的初始化
2. 使用 setOption 方法将配置项给图表

::: tips 注意
主流的框架中，使用 echarts 需要在 dom 挂载完成后，否则初始化时无法找到 dom 将会报错
:::

## 配置项

### [title](https://echarts.apache.org/zh/option.html#title)
