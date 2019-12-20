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

新建.babelrc，用来管理babel配置。

``` json
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ]
}
```

1

## 引入CSS预编译器简化CSS代码

## 引入ESlint检查代码格式

## 引入prettier格式化代码（可选，容易与ESlint冲突）

## 添加.editorconfig文件规定编辑器规范

## 引入框架开发（使用命令行工具可代替上面步骤）

## 创建Git仓库并上传

## 添加单元测试功能

## 添加端对端测试功能

## 引入jenkins启动CI&CD服务
