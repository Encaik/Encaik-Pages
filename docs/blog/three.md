# 学习使用three.js展示模型

## 使用

### 引入

从网站下载或从github下载，然后根据引入方式找到合适的文件夹，很久需求引入文件：

```html
<script src="./js/three.js/build/three.min.js"></script>
<script src="./js/three.js/examples/js/controls/OrbitControls.js"></script>
<script src="./js/three.js/examples/js/loaders/FBXLoader.js"></script>
<script src="./js/three.js/examples/js/libs/inflate.min.js"></script>
```

### 初始化场景

```js
var scene = new THREE.Scene();
```

### 定义添加辅助网格

```js
var gridHelper = new THREE.GridHelper( 10000, 10, 0x2C2C2C, 0x888888 );
scene.add(gridHelper);
```
