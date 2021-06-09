(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{551:function(a,t,s){"use strict";s.r(t);var e=s(18),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"react学习-创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react学习-创建项目"}},[a._v("#")]),a._v(" React学习-创建项目")]),a._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),s("h3",{attrs:{id:"安装create-react-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装create-react-app"}},[a._v("#")]),a._v(" 安装create-react-app")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g create-react-app\n")])])]),s("h2",{attrs:{id:"创建新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新项目"}},[a._v("#")]),a._v(" 创建新项目")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("create-react-app "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("your project name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"use-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-npm"}},[a._v("#")]),a._v(" --use-npm")]),a._v(" "),s("p",[a._v("使用npm作为包管理器")]),a._v(" "),s("h3",{attrs:{id:"eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[a._v("#")]),a._v(" eslint")]),a._v(" "),s("p",[a._v('"parser": "babel-eslint",\n"extends": [\n"plugin:react/recommended"\n],\n"rules": {\n"react/jsx-uses-react": 2\n}')]),a._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),s("p",[a._v("README.md :这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用Markdown的语法来编写。")]),a._v(" "),s("p",[a._v("package.json: 这个文件是webpack配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对webpack了解，对这个一定也很熟悉。")]),a._v(" "),s("p",[a._v("package-lock.json：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。")]),a._v(" "),s("p",[a._v("gitignore : 这个是git的选择性上传的配置文件，比如一会要介绍的node_modules文件夹，就需要配置不上传。")]),a._v(" "),s("p",[a._v("node_modules :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。")]),a._v(" "),s("p",[a._v("public ：公共文件，里边有公用模板和图标等一些东西。")]),a._v(" "),s("p",[a._v("src ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。")]),a._v(" "),s("h3",{attrs:{id:"public文件夹介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public文件夹介绍"}},[a._v("#")]),a._v(" public文件夹介绍")]),a._v(" "),s("p",[a._v("这个文件都是一些项目使用的公共文件，也就是说都是共用的，我们就具体看一下有那些文件吧。")]),a._v(" "),s("p",[a._v("favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。")]),a._v(" "),s("p",[a._v("index.html : 首页的模板文件，我们可以试着改动一下，就能看到结果。")]),a._v(" "),s("p",[a._v("mainifest.json：移动端配置文件，这个会在以后的课程中详细讲解。")]),a._v(" "),s("h3",{attrs:{id:"src文件夹介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src文件夹介绍"}},[a._v("#")]),a._v(" src文件夹介绍")]),a._v(" "),s("p",[a._v("这个目录里边放的是我们开放的源代码，我们平时操作做最多的目录。")]),a._v(" "),s("p",[a._v("index.js : 这个就是项目的入口文件，视频中我们会简单的看一下这个文件。")]),a._v(" "),s("p",[a._v("index.css ：这个是index.js里的CSS文件。")]),a._v(" "),s("p",[a._v("app.js : 这个文件相当于一个方法模块，也是一个简单的模块化编程。")]),a._v(" "),s("p",[a._v("serviceWorker.js: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。")]),a._v(" "),s("Valine")],1)}),[],!1,null,null,null);t.default=r.exports}}]);