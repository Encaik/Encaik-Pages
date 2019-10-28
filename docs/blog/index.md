# Vuepress搭建博客（一）

## 创建文件夹并初始化

这里可以按照官网的步骤先安装vuepress

```sh
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress
```

## 构建项目结构并新建文件

然后创建项目结构

```sh
# 新建一个 docs 文件夹
mkdir docs & cd docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 新建.vuepress文件夹
mkdir .vuepress & cd .vuepress

# 新建config.js配置文件
```

最终结构如下

```md
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── public (可选的)
│   │   └── config.js (可选的)
│   └── README.md
└── package.json
```

## 修改配置文件

你可以通过 themeConfig.nav 增加一些导航栏链接

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

## 在package.json中添加项目NPM脚本

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

然后就可以开始写作了:

```sh
yarn docs:dev # 或者：npm run docs:dev
```

要生成静态的 HTML 文件，运行：

```sh
yarn docs:build # 或者：npm run docs:build
```

默认情况下，文件将会被生成在 .vuepress/dist，当然，你也可以通过 .vuepress/config.js 中的 dest 字段来修改，生成的文件可以部署到任意的静态文件服务器上
