# 前端工程化项目构建流程及基本结构

![banner](/img/blog/index.png)

## 环境准备

开发前确保已经安装好了 Node.js 的最新 LTS（长期支持）版本，否则请下载安装或更新。

## 创建 Node.js 项目

先通过下面的命令初始化 node 项目，新建 package.json 文件用来管理包。

```sh
npm init [-y]

```

如果在后面跟上`-y`的意义是每项问题都选择回车默认。如果不加则有以下问题,括号内为回车默认填写内容。

```sh
package name: ([文件夹名])
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
[此处展示根据前面的选项生成的package.json的内容]
Is this OK? (yes)
```

## 使用 Webpack 模块化打包

### 初步使用 webpack

项目中的文件可以选择分文件形式，也可以选择压缩打包为单文件形式，打包工具选择目前主流的 webpack。先通过下面的命令安装 webpack 包。

```sh
npm install webpack webpack-cli --save-dev
```

然后创建一个打包项目的文件结构,即 dist/index.html 文件与 src/index.js 文件。并在 package.json 文件中做一些调整，以便确保我们安装包是私有的(private)，并且移除 main 入口。这可以防止意外发布代码。

```json
+   "private": true,
-   "main": "index.js",
```

执行打包命令，webpack 会根据默认配置将 src 中的 js 文件打包为一个 js 放入 dist，dist 中的 html 只需要引用这个 js 即可。

```sh
npx webpack
```

对于更复杂的配置需求，可以新建 webpack.config.js 文件用来管理 webpack 的自定义配置。

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

为了让打包不需要每次都手动输入命令，可以再 package.json 中添加 npm 脚本。

```json
"scripts": {
  "build": "webpack"
},
```

### 使用 source map 定位错误

在开发中，如果出现错误，控制台只能找到打包文件的出错位置，不能找到打包前模块文件的错误位置。因此需要使用 source map 来定位错误。

```js
module.exports = {
  devtool: "inline-source-map"
};
```

在配置中添加 inline-source-map，就可以启用 source map。

### 使用观察模式即时打包

观察模式是对代码进行观察，如果发现代码有变化则立即打包，而不用每次更改都运行命令手动打包。观察模式是 webpack 命令的配置，可以通过命令启用。

```json
"scripts": {
  "watch": "webpack --watch",
},
```

### 使用 webpack-dev-server 启动本地服务

观察模式虽然方便，但是仍然需要每次都刷新页面才可以更新代码，如果想要让项目有可以自动刷新的本地服务器，则需要配置 webpack-dev-server,首先安装包。

```sh
npm install --save-dev webpack-dev-server
```

然后修改 webpack.config.js 文件启用 webpack-dev-server。

```js
module.exports = {
  devServer: {
    contentBase: "./dist"
  }
};
```

此配置将使项目在默认的 8080 端口开启服务，并在当前目录的 dist 下寻找可访问的页面。开启服务也有对应的命令可以使用。

```json
"scripts": {
  "start": "webpack-dev-server --open",
},
```

启动服务后，打开页面修改代码保存，页面将自动刷新。

### 启用 HMR 进行开发

当项目结构逐渐复杂，每次保存代码都重新编译就会很浪费时间。这时候可以使用热重载，即在项目运行的状态下，替换部分更改的模块，而不需要重新编译整个项目，这样可以大大提高效率。HMR 功能是 webpack-dev-server 包的内容，因此只需要对配置文件进行修改即可。

```js
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

### 使用 HtmlWebpackPlugin 生成 html 模板

为了方便不再修改 html 文件，可以安装插件让打包的 js 自动插入到 生成的 html 文件里。想要达成这个目的，可以使用 html-webpack-plugin 插件。

```sh
npm install --save-dev html-webpack-plugin
```

下载好后修改 webpack 配置文件启用 html 模板功能。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    title: 'Output Management'
  })
],
```

### 使用 clean-webpack-plugin 清理 dist 目录

有时候会把旧的文件遗留在打包目录内，但是我们并不需要。因此我们可以使用 clean-webpack-plugin 插件在每次打包前清空 dist 目录。

```sh
npm install clean-webpack-plugin --save-dev
```

安装完成以后再 webpack 配置文件做以下修改：

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [
  new CleanWebpackPlugin(),
],
```

### 使用 babel-loader 转译 JavaScript 代码

```sh
npm install -D babel-loader @babel/core @babel/preset-env
```

首先在 webpack 中加入 babel-loader 使 babel 生效。

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  ];
}
```

由于 babel 默认只转换 ES6 新语法，不转换新的 API，如：Set、Map、Promise 等，所以需要安装 @babel/polyfill 转换新 API。

```sh
npm install --save @babel/polyfill
```

修改配置文件启用插件，并且配置兼容的浏览器环境。在配置文件中设置 targets 属性：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

## 引入 CSS 预编译器简化 CSS 代码

先安装每一个预编译器都需要的加载模块。

```sh
npm i -D style-loader css-loader
```

然后根据不同的情况安装不同的模块。

### Less

如果要加入 less，则先安装 less 及其 webpack 模块。

```sh
npm i -D less less-loader
```

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"]
      //use中的模块为从下至上链式调用，即less-loader>css-loader>style-loader
    }
  ];
}
```

### Sass/Scss

```sh
npm i -D node-sass sass-loader
```

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"]
    }
  ];
}
```

### stylus

```sh
npm i -D stylus stylus-loader
```

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"]
    }
  ];
}
```

## 引入 ESlint 检查代码格式

```sh
npm i -D eslint eslint-loader eslint-friendly-formatter
```

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        {
          loader: "eslint-loader"
        }
      ],
      enforce: "pre", // 编译前检查
      exclude: /node_modules/, // 不检测的文件
      include: [path.resolve(__dirname, "src")], // 指定检查的目录
      options: {
        // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范
      }
    }
  ];
}
```

```json
{
  "root": true,
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "linebreak-style": [0, "error", "windows"],
    "indent": ["error", 4]
  }
}
```

## 引入框架开发（可选，使用命令行工具可代替上面步骤）

[vue](https://cn.vuejs.org/)

[react](https://zh-hans.reactjs.org/)

[angular](https://angular.cn/)

## 创建 Git 仓库并上传（可选）

首先创建本地仓库，创建完成后将所有文件（如果有需要忽略的文件则添加.gitignore 文件）添加到本地仓库

```sh
git init
git add .
```

然后创建空的远程仓库，创建完成后会取得远程仓库的 http 或 ssh 链接，将此链接设为远程推送仓库

```sh
git remote add origin [branch(为空时默认为master)] [url]
```

设置完成后，将本地仓库的内容推送到远程仓库

```sh
git push
```
