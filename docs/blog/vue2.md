# 从头开始学习Vue2源码

## 准备

首先，从Github克隆Vue的源码。

``` sh
git clone git@github.com:vuejs/vue.git
```

然后，打开文件夹，并将版本切换到vue最早创建的init版本。

``` sh
git checkout a879ec06ef9504db8df2a19aac0d07609fe36131
```

此时文件夹中就是vue最开始的源码，结构比现在简单了很多：

``` sh
VueProject
    ├─build
    │   └─build.js
    ├─src
    │   ├─compiler
    │   ├─instance
    │   ├─observer
    │   ├─util
    │   ├─vdom
    │   ├─config.js
    │   ├─index.js
    │   └─index.umd.js      // Webpack入口文件
    ├─.babelrc              // Babel配置文件
    ├─package-lock.json     // npm包管理文件
    ├─package.json          // npm配置文件
    └─webpack.config.js     // Webpack配置文件
```

除了这些常用熟悉的文件外，其他文件逐个分析。

## package.json

``` json
"scripts": {
    "dev": "webpack --watch",
    "test": "mocha",
    "build": "NODE_ENV=production node build/build.js"
  },
```

### dev

这是webpack观察者模式启动项目的命令，目的是修改项目后不用每次都打包，缺点是需要手动刷新浏览器。

### test

未找到相关配置，直接运行报错，应该是需要有全局mocha配置。之后细看。

### build

修改环境变量为生产环境并打包项目。运行此命令后产生dist文件夹，里面是打包好的vue.js文件。

## webpack.config.js

``` js
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.umd.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue.js',
    library: 'Vue',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
```

入口文件为index.umd.js，输出目录为dist/vue.js，库名称为Vue，库类型为umd。

下面为配置babel处理除了node_modules文件夹中的其他js文件。

## .babelrc

``` json
{
  "env": {
    "development": {
      "presets": ["es2015", "stage-2"]
    },
    "production": {
      "presets": ["es2015-rollup", "stage-2"]
    }
  }
}
```

设置了两个环境不同的规则，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development。

其中开发环境下配置预设转换为es2015，模式为stage-2，是不同阶段出现的es语法，包含不同的转码插件。

stage-2：

除了覆盖stage-3的所有功能，还支持如下两个插件：

- syntax-trailing-function-commas
- transform-object-reset-spread

而在生产环境则用了es2015-rollup，这是前端模块打包工具，可以让bundle文件最小化，避免引入冗余模块代码，有效减少文件请求大小。
