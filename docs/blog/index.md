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
