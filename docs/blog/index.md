[banner](/img/blog/index.png)

# 前端工程化项目构建流程及基本结构

## 环境准备

开发前确保已经安装好了 Node.js 的最新 LTS（长期支持）版本，否则请下载安装或更新。

## 创建 Node.js 项目

```sh
npm init [-y]

```

此命令会新建 package.json 文件，用来管理 Node.js 项目。

## 引入 Webpack 打包文件

```sh
npm install webpack webpack-cli --save-dev
```

在 package.json 文件中做以下调整：

```json
+   "private": true,
-   "main": "index.js",
```

新建 webpack.config.js，用来管理 webpack 配置。

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

如果想要让项目有本地服务器可以启动，则需要配置 webpack-dev-server。

```sh
npm install --save-dev webpack-dev-server
```

然后修改 webpack.config.js 文件启用 webpack-dev-server。

```js
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

为了方便不再修改 html 文件，可以安装插件让打包的 js 自动插入到 html 里并生成 html 文件。想要达成这个目的，可以使用 html-webpack-plugin 插件。

```sh
npm install --save-dev html-webpack-plugin
```

下载好后修改 webpack 配置文件启用 html 模板功能。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    template: './src/public/index.html',
    filename: 'index.html',
  }),
],
```

## 清理 dist 目录

```sh
npm install clean-webpack-plugin --save-dev
```

安装完成以后再 webpack 配置文件做以下修改：

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');

plugins: [
  new CleanWebpackPlugin(['dist']),
],
```

## 引入 Babel 转译 JavaScript 代码

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

首先在 webpack 中加入 babel-loader 使 babel 生效。

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      /* 下面这种写法可以代替简单的babel配置文件 */
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

然后新建.babelrc，用来管理 babel 配置。

```json
{
  "presets": [["@babel/preset-env"]]
}
```

由于 babel 默认只转换 ES6 新语法，不转换新的 API，如：Set、Map、Promise 等，所以需要安装 @babel/polyfill 转换新 API。安装 @babel/plugin-transform-runtime 优化代码，@babel/plugin-transform-runtime 是一个可以重复使用 Babel 注入的帮助程序代码来节省代码的插件。

```sh
npm install --save-dev @babel/polyfill @babel/plugin-transform-runtime
```

修改 .babelrc 配置文件启用插件，并且配置兼容的浏览器环境。在 .babelrc 配置文件中设置 targets 属性：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        // 在每个文件中使用polyfill时，为polyfill添加特定导入。利用捆绑器只加载一次相同的polyfill。
        "modules": false,
        // 启用将ES6模块语法转换为其他模块类型，设置为false不会转换模块。
        "targets": {
          "browsers": "last 2 versions, not ie <= 9"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": false
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
