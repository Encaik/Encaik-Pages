# 学习使用Tensorflow.js机器学习

## 介绍

### 什么是Tensorflow.js

TensorFlow.js是一个开源的基于硬件加速的JavaScript库，用于训练和部署机器学习模型。谷歌推出的第一个基于TensorFlow的前端深度学习框架TensorFlow.js 是一个开源的用于开发机器学习项目的 WebGL-accelerated JavaScript 库。TensorFlow.js 可以为你提供高性能的、易于使用的机器学习构建模块，允许你在浏览器上训练模型，或以推断模式运行预训练的模型。TensorFlow.js 不仅可以提供低级的机器学习构建模块，还可以提供高级的类似 Keras 的 API 来构建神经网络。

### Tensorflow.js的优点

1. 不用安装驱动器和软件，通过链接即可分享程序
2. 网页应用交互性更强
3. 有访问GPS，Camera，Microphone，Accelerator，Gyroscope等传感器的标准api（主要是指手机端）
4. 安全性，因为数据都是保存在客户端的

### TensorFlow.js的应用方式

1. 在浏览器中开发ML

    使用简单直观的API从头构建模型，然后使用低级别的JavaScript线性代数库或高层API进行训练。

2. 运行现有模型

    使用TensorFlow.js模型转换器在浏览器中运行预训练好的TensorFlow模型。

3. 重新训练现有模型

    使用连接到浏览器的传感器数据或其他客户端数据重新训练ML模型。

## 安装

### 使用Script Tag

```html
<html>
  <head>
    <!-- Load TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.9.0"> </script>

    <!-- Place your code in the script tag below. You can also use an external .js file -->
    <script>
      // Notice there is no 'import' statement. 'tf' is available on the index-page
      // because of the script tag above.

      // Define a model for linear regression.
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));

      // Prepare the model for training: Specify the loss and the optimizer.
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      // Generate some synthetic data for training.
      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      // Train the model using the data.
      model.fit(xs, ys).then(() => {
        // Use the model to do inference on a data point the model hasn't seen before:
        // Open the browser devtools to see the output
        model.predict(tf.tensor2d([5], [1, 1])).print();
      });
    </script>
  </head>

  <body>
  </body>
</html>
```

### npm/yarn

```sh
yarn add @tensorflow/tfjs
npm install @tensorflow/tfjs
```

在js文件中输入以下代码：

```js
 import * as tf from '@tensorflow/tfjs';

  // Define a model for linear regression.
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));

  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

  // Generate some synthetic data for training.
  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

  // Train the model using the data.
  model.fit(xs, ys).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([5], [1, 1])).print();
  });
```

## 概念名词

### 张量

TensorFlow.js中数据的中心单位是张量：一组数值形成一个或多个维度的数组。 张量实例具有定义数组形状的形状属性。

Tensorflow.js中数据的主要表现形式就是tensor（张量）：由 一组数值形成一维或多维数组。一个Tensor实例有一个shape属性来定义这一组数值如何组成张量,而最主要的Tensor实例的构造函数就是 tf.tensor 函数，如下所示：

```js
// 2x3 Tensor
const shape = [2, 3]; // 2 行, 3 列
const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
a.print(); // 打印张量值
// 输出:    [[1 , 2 , 3 ],
//          [10, 20, 30]]

// shape也可以用下面的方式实现:
const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
b.print();
// 输出:    [[1 , 2 , 3 ],
//          [10, 20, 30]]
```
