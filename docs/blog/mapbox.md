# 使用 mapbox-gl 创建数据可视化地图

Mapbox GL JS 是一个 JavaScript 库，它使用 WebGL，以 vector tiles 和 Mapbox styles 为来源，将它们渲染成互动式地图。它是 Mapbox GL 生态系统的一部分，其中还包括 Mapbox Mobile，它是一个用 C++ 编写的兼容桌面和移动平台的渲染引擎。

## 使用方式

mapbox 请求数据需要申请 token，分为公共密钥和私密密钥，对应不同等级的功能。

- script 引入

```html
<script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.js"></script>
<link
  href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.1/mapbox-gl.css"
  rel="stylesheet"
/>
```

```js
mapboxgl.accessToken = "your_token";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9"
});
```

- npm

```sh
npm install --save mapbox-gl
```

```js
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "your_token";
const map = new mapboxgl.Map({
  container: "<your HTML element id>",
  style: "mapbox://styles/mapbox/streets-v9"
});
```

## 核心概念

### Map

Map 对象代表页面上的地图。它暴露了一系列的方法和属性使得用户可以通过编程开发对地图进行修改，并在用户与地图交互时触发一系列的事件。

### Sources

Sources 用于指定将在地图中渲染的地理要素。 Source 对象可通过 Map#getSource 获得。

### Style

Mapbox 样式是一种定义地图视觉外观的文档:绘制什么数据、绘制它的顺序以及在绘制数据时如何对数据进行样式化。样式文档是具有特定根级别和嵌套属性的 JSON 对象。该规范定义并描述了这些属性。
