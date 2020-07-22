# 学习使用 three.js 展示模型

## 使用

### 引入

从网站下载或从 github 下载，然后根据引入方式找到合适的文件夹，很久需求引入文件：

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

### 定义添加辅助网格(可选)

```js
var gridHelper = new THREE.GridHelper(10000, 10, 0x2c2c2c, 0x888888);
scene.add(gridHelper);
```

### 在场景中添加相机

其中`OrthographicCamera`为正交相机，即物体无论远近，大小不会发生变化。
另一种是透视相机，根据人眼观察物体的效果会对物体产生形变。

```js
/**
 * 相机设置
 */
var width = window.innerWidth; //窗口宽度
var height = window.innerHeight; //窗口高度
var k = width / height; //窗口宽高比
var s = 6000; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0, 30000);
camera.position.set(15000, 0, 0); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
```

### 在场景中添加光源

其中`AmbientLight`是环境光，只起环境基础照明作用，不会产生阴影。`PointLight`是点光，通过点光照射的物体会产生阴影，如果没有默认产生则需要对光和物体进行配置。及点光产生阴影，物体接受产生阴影。

```js
/**
 * 光源设置
 */
//环境光
var ambient = new THREE.AmbientLight(0xffffff);
scene.add(ambient);
//点光
var pointLight1 = new THREE.PointLight("#123456");
pointLight1.position.set(100000, 100000, 100000);
pointLight1.castShadow = true;
scene.add(pointLight1);
var pointLight2 = new THREE.PointLight("#ffffff");
pointLight2.position.set(-100000, -100000, -100000);
pointLight2.castShadow = true;
scene.add(pointLight2);
```

### 创建渲染器对象

通过这一步，之前所有的对象就可以产生在页面绑定好的标签位置上。此时的场景是个空场景。

```js
/**
 * 创建渲染器对象
 */
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height); //设置渲染区域尺寸
renderer.shadowMapEnabled = true;
renderer.setClearColor(0xb9d3ff, 0); //设置背景颜色
document.getElementById("map").appendChild(renderer.domElement); //body元素中插入canvas对象
renderer.render(scene, camera); //执行渲染操作
```

### 添加物体

通过`FBXLoader`可以将FBX模型导入场景中显示。

```js
var loader = new THREE.FBXLoader(); //创建一个FBX加载器
loader.load("xxx.FBX", obj => {
  scene.add(obj);
});
```

### 添加物体控制

通过`OrbitControls`可以添加对物体的控制，然后每次控制事件发生就重新渲染页面，做到即时操作的效果。

```js
//执行渲染操作   指定场景、相机作为参数
function render() {
  renderer.render(scene, camera); //执行渲染操作
}
render();
var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
controls.addEventListener("change", render); //监听鼠标、键盘事件
```
