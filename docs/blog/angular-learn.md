# 学习Angular9

## 搭建开发环境

- node.js

最新版node.js即可

- Angular cli工具

```sh
npm install -g @angular/cli
```

## 创建新项目

```sh
ng new [project_name]
```

然后根据提示，配置项目。

- 是否需要添加路由？
- 选择要使用的CSS规范

## 项目结构

|文件夹或文件|用途|
|---|---|
|e2e/|e2e测试配置文件|
|node_modules/|node模块|
|src/|根项目的源文件|
|.editorconfig|代码编辑器的配置|
|.gitignore|指定 Git 应忽略的不必追踪的文件|
|angular.json|为工作区中的所有项目指定 CLI 的默认配置，包括 CLI 要用到的构建、启动开发服务器和测试工具的配置项|
|browserslist||
|karma.conf.js||
|package-lock.json|提供 npm 客户端安装到 node_modules 的所有软件包的版本信息|
|package.json|配置工作空间中所有项目可用的 npm包依赖 |
|README.md|根应用的简介文档|
|tsconfig.app.json||
|tsconfig.json|工作空间中各个项目的默认 TypeScript 配置|
|tsconfig.spec.json||
|tslint.json|工作空间中各个项目的默认 TSLint 配置|