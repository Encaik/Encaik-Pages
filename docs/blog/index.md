# 前端工程化项目构建流程及基本结构

## 环境准备

开发前确保已经安装好了Node.js的最新LTS（长期支持）版本，否则请下载安装或更新。

## 创建Node.js项目

``` sh
npm init [-y]

```

此命令会新建package.json文件，用来管理Node.js项目。

## 引入Webpack打包文件

``` sh
npm install --save-dev webpack webpack-cli
```

新建webpack.config.js，用来管理webpack配置。

``` js
const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
```

如果想要让项目有本地服务器可以启动，则需要配置webpack-dev-server。

``` sh
npm install --save-dev webpack-dev-server
```

然后修改webpack.config.js文件启用webpack-dev-server。

``` js
const webpack = require('webpack');

devServer: {
  contentBase: './dist',
  hot: true,
},
plugins: [
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
],
```

为了方便不再修改html文件，可以安装插件让打包的js自动插入到html里并生成html文件。想要达成这个目的，可以使用html-webpack-plugin插件。

``` sh
npm install --save-dev html-webpack-plugin
```

下载好后修改webpack配置文件启用html模板功能。

``` js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    template: './src/public/index.html',
    filename: 'index.html',
  }),
],
```

## 引入Babel转译JavaScript代码

``` sh
npm install babel-loader @babel/core @babel/preset-env @babel/polyfill
```

首先在webpack中加入babel-loader使babel生效。

``` js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader:"babel-loader",
      /* 下面这种写法可以代替简单的babel配置文件 */
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }

    }
  ]
}
```

然后新建.babelrc，用来管理babel配置。

``` json
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ]
}
```

由于 babel 默认只转换 ES6 新语法，不转换新的 API，如：Set、Map、Promise等，所以需要安装 @babel/polyfill 转换新 API。安装 @babel/plugin-transform-runtime 优化代码，@babel/plugin-transform-runtime 是一个可以重复使用 Babel 注入的帮助程序代码来节省代码的插件。

``` sh
npm install --save-dev @babel/polyfill @babel/plugin-transform-runtime
```

修改 .babelrc 配置文件启用插件，并且配置兼容的浏览器环境。在 .babelrc 配置文件中设置 targets 属性：

``` json
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      // 在每个文件中使用polyfill时，为polyfill添加特定导入。利用捆绑器只加载一次相同的polyfill。
      "modules": false,
      // 启用将ES6模块语法转换为其他模块类型，设置为false不会转换模块。
      "targets": {
        "browsers": "last 2 versions, not ie <= 9"
      }
    }]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "helpers": false
    }]
  ]
}
```

## 引入CSS预编译器简化CSS代码

先安装每一个预编译器都需要的加载模块。

``` sh
npm i -D style-loader css-loader
```

然后根据不同的情况安装不同的模块。

### Less

如果要加入less，则先安装less及其webpack模块。

``` sh
npm i -D less less-loader
```

``` js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
      //use中的模块为从下至上链式调用，即less-loader>css-loader>style-loader
    }
  ]
}
```

### Sass/Scss

``` sh
npm i -D node-sass sass-loader
```

``` js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }
  ]
}
```

### stylus

``` sh
npm i -D stylus stylus-loader
```

``` js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
      ]
    }
  ]
}
```

## 引入ESlint检查代码格式

``` sh
npm i -D eslint eslint-loader eslint-friendly-formatter
```

``` js
module: {
  rules: [
    {
      test: /\.js$/,
      use:[
        {
          loader:'eslint-loader'
        }
      ],
      enforce: "pre", // 编译前检查
      exclude: /node_modules/, // 不检测的文件
      include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
      }
    },
  ]
}
```

``` json
{
  "root": true,
  "parserOptions": {
    "sourceType": 'module'
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "linebreak-style": [0 ,"error", "windows"],
    "indent": ['error', 4]
  }
}
```

## 引入prettier格式化代码（可选，容易与ESlint冲突）

## 添加.editorconfig文件规定编辑器规范

## 引入框架开发（使用命令行工具可代替上面步骤）

## 创建Git仓库并上传

## 添加单元测试功能

## 添加端对端测试功能

## 引入jenkins启动CI&CD服务
