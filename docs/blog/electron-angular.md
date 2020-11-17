# 学习 Electron 框架配合 Angular 制作桌面端应用

## 安装

### 模板

[angular-electron](https://github.com/maximegris/angular-electron)

### 运行

页面需要有主进程与渲染进程的通信，如果在代码中直接 require 引入 electron，程序会报错，模板中提供了一个写好的 service，在/src/app/core/services/electron 中，名称为 electron.service.ts，使用时直接引入即可。

如果不使用模板，创建如下文件：

```js
import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";

@Injectable({
  providedIn: "root"
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require("electron").ipcRenderer;
      this.webFrame = window.require("electron").webFrame;

      // If you wan to use remote object, pleanse set enableRemoteModule to true in main.ts
      // this.remote = window.require('electron').remote;

      this.childProcess = window.require("child_process");
      this.fs = window.require("fs");
    }
  }
}
```
