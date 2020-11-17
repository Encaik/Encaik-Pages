# 学习 Electron 框架配合 Angular 制作桌面端应用

## 安装

### 模板

[angular-electron](https://github.com/maximegris/angular-electron)

### 运行

页面需要有主进程与渲染进程的通信，如果在代码中直接 require 引入 electron，程序会报错，模板中提供了一个写好的 service，在/src/app/core/services/electron 中，名称为 electron.service.ts，使用时直接引入即可。
