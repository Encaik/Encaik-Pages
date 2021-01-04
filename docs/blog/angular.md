# 学习使用Angular9

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

## 主文件

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 语法

- 模板语法

{{变量名}}，变量在ts文件中声明，如下：

```ts
export class AppComponent implements OnInit {

  [变量名]=[变量值];

  constructor() { }

  ngOnInit(): void {
  }

}
```

- 绑定方法

(click)="[方法名]",方法在ts文件中声明，如下：

```ts
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  [方法名]() {
      //方法体
  }

}
```

- 双向绑定

[(ngModel)]="[变量名]",如下：

```html
<input type="text" [(ngModel)]="[变量名]"/>
```

:::warning

使用表单，需要在主文件中引入表单模块，如下：

```ts
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule
  ]
}
```

:::

## 生命周期

|钩子|用途|
|---|---|
|ngOnChanges()|当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象。<br/>在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。|
|ngOnInit()|在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。<br/>在第一轮 ngOnChanges() 完成之后调用，只调用一次。|
|ngDoCheck()|检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。<br/>在每个变更检测周期中，紧跟在 ngOnChanges() 和 ngOnInit() 后面调用。|
|ngAfterContentInit()|当 Angular 把外部内容投影进组件/指令的视图之后调用。<br/>第一次 ngDoCheck() 之后调用，只调用一次。|
|ngAfterContentChecked()|每当 Angular 完成被投影组件内容的变更检测之后调用。<br/>ngAfterContentInit() 和每次 ngDoCheck() 之后调用。|
|ngAfterViewInit()|当 Angular 初始化完组件视图及其子视图之后调用。<br/>第一次 ngAfterContentChecked() 之后调用，只调用一次。|
|ngAfterViewChecked()|每当 Angular 做完组件视图和子视图的变更检测之后调用。<br/>ngAfterViewInit() 和每次ngAfterContentChecked() 之后调用。|
|ngOnDestroy()|每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。<br/>在 Angular 销毁指令/组件之前调用。

<Valine></Valine>
