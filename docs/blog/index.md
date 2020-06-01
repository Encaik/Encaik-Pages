<section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="font-size: 16px; color: black; padding: 0 10px; line-height: 1.6; word-spacing: 0px; letter-spacing: 0px; word-break: break-word; word-wrap: break-word; text-align: left; margin-top: -10px; font-family: PingFangSC-Light;"><h1 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; border-bottom: 2px solid rgb(248,57,41); font-size: 1.3em;"><span class="prefix" style="display: none;"></span><span class="content" style="display: inline-block; font-weight: normal; background: rgb(248,57,41); color: #ffffff; padding: 3px 10px 1px; border-top-right-radius: 3px; border-top-left-radius: 3px; margin-right: 3px;">前端工程化项目构建流程及基本结构</span><span class="suffix"></span></h1>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">环境准备</span><span class="suffix"></span></h2>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">开发前确保已经安装好了Node.js的最新LTS（长期支持）版本，否则请下载安装或更新。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">创建Node.js项目</span><span class="suffix"></span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm init [-y]
<span/>
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">此命令会新建package.json文件，用来管理Node.js项目。</p>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入Webpack打包文件</span><span class="suffix"></span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install webpack webpack-cli --save-dev
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">在package.json文件中做以下调整：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">+   <span class="hljs-string" style="color: #98c379; line-height: 26px;">"private"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">true</span>,
<span/>-   <span class="hljs-string" style="color: #98c379; line-height: 26px;">"main"</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">"index.js"</span>,
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">新建webpack.config.js，用来管理webpack配置。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">const</span> path = <span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #98c379; line-height: 26px;">'path'</span>);
<span/>
<span/><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>.exports = {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">entry</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'./src/index.js'</span>,
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">output</span>: {
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">filename</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'bundle.js'</span>,
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">path</span>: path.resolve(__dirname, <span class="hljs-string" style="color: #98c379; line-height: 26px;">'dist'</span>)
<span/>  }
<span/>};
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">如果想要让项目有本地服务器可以启动，则需要配置webpack-dev-server。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install --save-dev webpack-dev-server
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">然后修改webpack.config.js文件启用webpack-dev-server。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">const</span> webpack = <span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #98c379; line-height: 26px;">'webpack'</span>);
<span/>
<span/>devServer: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">contentBase</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'./dist'</span>,
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">hot</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">true</span>,
<span/>},
<span/><span class="hljs-attr" style="color: #d19a66; line-height: 26px;">plugins</span>: [
<span/>  <span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">new</span> webpack.NamedModulesPlugin(),
<span/>  <span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">new</span> webpack.HotModuleReplacementPlugin(),
<span/>],
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">为了方便不再修改html文件，可以安装插件让打包的js自动插入到html里并生成html文件。想要达成这个目的，可以使用html-webpack-plugin插件。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install --save-dev html-webpack-plugin
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">下载好后修改webpack配置文件启用html模板功能。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">const</span> HtmlWebpackPlugin = <span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #98c379; line-height: 26px;">'html-webpack-plugin'</span>);
<span/>
<span/>plugins: [
<span/>  <span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">new</span> HtmlWebpackPlugin({
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">template</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'./src/public/index.html'</span>,
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">filename</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'index.html'</span>,
<span/>  }),
<span/>],
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">清理dist目录</span><span class="suffix"></span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install clean-webpack-plugin --save-dev
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">安装完成以后再webpack配置文件做以下修改：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">const</span> CleanWebpackPlugin = <span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #98c379; line-height: 26px;">'clean-webpack-plugin'</span>);
<span/>
<span/>plugins: [
<span/>  <span class="hljs-keyword" style="color: #c678dd; line-height: 26px;">new</span> CleanWebpackPlugin([<span class="hljs-string" style="color: #98c379; line-height: 26px;">'dist'</span>]),
<span/>],
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入Babel转译JavaScript代码</span><span class="suffix"></span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install --save-dev @babel/core @babel/cli @babel/preset-env
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">首先在webpack中加入babel-loader使babel生效。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">rules</span>: [
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.js$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">exclude</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/(node_modules|bower_components)/</span>,
<span/>      <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">/* 下面这种写法可以代替简单的babel配置文件 */</span>
<span/>      use: {
<span/>        <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">loader</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">'babel-loader'</span>,
<span/>        <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">options</span>: {
<span/>          <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">presets</span>: [<span class="hljs-string" style="color: #98c379; line-height: 26px;">'@babel/preset-env'</span>]
<span/>        }
<span/>      }
<span/>
<span/>    }
<span/>  ]
<span/>}
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">然后新建.babelrc，用来管理babel配置。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">{
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"presets"</span>: [
<span/>    [
<span/>      <span class="hljs-string" style="color: #98c379; line-height: 26px;">"@babel/preset-env"</span>,
<span/>    ]
<span/>  ]
<span/>}
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">由于 babel 默认只转换 ES6 新语法，不转换新的 API，如：Set、Map、Promise等，所以需要安装 @babel/polyfill 转换新 API。安装 @babel/plugin-transform-runtime 优化代码，@babel/plugin-transform-runtime 是一个可以重复使用 Babel 注入的帮助程序代码来节省代码的插件。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm install --save-dev @babel/polyfill @babel/plugin-transform-runtime
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">修改 .babelrc 配置文件启用插件，并且配置兼容的浏览器环境。在 .babelrc 配置文件中设置 targets 属性：</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">{
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"presets"</span>: [
<span/>    [<span class="hljs-string" style="color: #98c379; line-height: 26px;">"@babel/preset-env"</span>, {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"useBuiltIns"</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">"usage"</span>,
<span/>      // 在每个文件中使用polyfill时，为polyfill添加特定导入。利用捆绑器只加载一次相同的polyfill。
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"modules"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">false</span>,
<span/>      // 启用将ES6模块语法转换为其他模块类型，设置为false不会转换模块。
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"targets"</span>: {
<span/>        <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"browsers"</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">"last 2 versions, not ie &lt;= 9"</span>
<span/>      }
<span/>    }]
<span/>  ],
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"plugins"</span>: [
<span/>    [<span class="hljs-string" style="color: #98c379; line-height: 26px;">"@babel/plugin-transform-runtime"</span>, {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"helpers"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">false</span>
<span/>    }]
<span/>  ]
<span/>}
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入CSS预编译器简化CSS代码</span><span class="suffix"></span></h2>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">先安装每一个预编译器都需要的加载模块。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm i -D style-loader css-loader
<span/></code></pre>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">然后根据不同的情况安装不同的模块。</p>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-size: 14px; color: rgb(165,213,93);">Less</span><span class="suffix" style="display: none;"></span></h3>
<p data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em;">如果要加入less，则先安装less及其webpack模块。</p>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm i -D less less-loader
<span/></code></pre>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">rules</span>: [
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.css$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>
<span/>      ]
<span/>    },
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.less$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'less-loader'</span>
<span/>      ]
<span/>      <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">//use中的模块为从下至上链式调用，即less-loader&gt;css-loader&gt;style-loader</span>
<span/>    }
<span/>  ]
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-size: 14px; color: rgb(165,213,93);">Sass/Scss</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm i -D node-sass sass-loader
<span/></code></pre>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">rules</span>: [
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.css$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>
<span/>      ]
<span/>    },
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.less$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'less-loader'</span>
<span/>      ]
<span/>    }
<span/>  ]
<span/>}
<span/></code></pre>
<h3 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 20px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-size: 14px; color: rgb(165,213,93);">stylus</span><span class="suffix" style="display: none;"></span></h3>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm i -D stylus stylus-loader
<span/></code></pre>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">rules</span>: [
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.css$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>
<span/>      ]
<span/>    },
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.styl$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>: [
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'style-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'css-loader'</span>,
<span/>        <span class="hljs-string" style="color: #98c379; line-height: 26px;">'stylus-loader'</span>
<span/>      ]
<span/>    }
<span/>  ]
<span/>}
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入ESlint检查代码格式</span><span class="suffix"></span></h2>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">npm i -D eslint eslint-loader eslint-friendly-formatter
<span/></code></pre>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;"><span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">module</span>: {
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">rules</span>: [
<span/>    {
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">test</span>: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/\.js$/</span>,
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">use</span>:[
<span/>        {
<span/>          <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">loader</span>:<span class="hljs-string" style="color: #98c379; line-height: 26px;">'eslint-loader'</span>
<span/>        }
<span/>      ],
<span/>      <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">enforce</span>: <span class="hljs-string" style="color: #98c379; line-height: 26px;">"pre"</span>, <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">// 编译前检查</span>
<span/>      exclude: <span class="hljs-regexp" style="color: #98c379; line-height: 26px;">/node_modules/</span>, <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">// 不检测的文件</span>
<span/>      include: [path.resolve(__dirname, <span class="hljs-string" style="color: #98c379; line-height: 26px;">'src'</span>)], <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">// 指定检查的目录</span>
<span/>      options: { <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">// 这里的配置项参数将会被传递到 eslint 的 CLIEngine</span>
<span/>        formatter: <span class="hljs-built_in" style="color: #e6c07b; line-height: 26px;">require</span>(<span class="hljs-string" style="color: #98c379; line-height: 26px;">'eslint-friendly-formatter'</span>) <span class="hljs-comment" style="color: #5c6370; font-style: italic; line-height: 26px;">// 指定错误报告的格式规范</span>
<span/>      }
<span/>    },
<span/>  ]
<span/>}
<span/></code></pre>
<pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px;"><code class="hljs" style="overflow-x: auto; padding: 16px; color: #abb2bf; background: #282c34; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; border-radius: 0px; font-size: 12px; -webkit-overflow-scrolling: touch;">{
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"root"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">true</span>,
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"parserOptions"</span>: {
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"sourceType"</span>: 'module'
<span/>  },
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"env"</span>: {
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"browser"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">true</span>,
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"node"</span>: <span class="hljs-literal" style="color: #56b6c2; line-height: 26px;">true</span>
<span/>  },
<span/>  <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"rules"</span>: {
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"linebreak-style"</span>: [<span class="hljs-number" style="color: #d19a66; line-height: 26px;">0</span> ,<span class="hljs-string" style="color: #98c379; line-height: 26px;">"error"</span>, <span class="hljs-string" style="color: #98c379; line-height: 26px;">"windows"</span>],
<span/>    <span class="hljs-attr" style="color: #d19a66; line-height: 26px;">"indent"</span>: ['error', <span class="hljs-number" style="color: #d19a66; line-height: 26px;">4</span>]
<span/>  }
<span/>}
<span/></code></pre>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入prettier格式化代码（可选，容易与ESlint冲突）</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">添加.editorconfig文件规定编辑器规范</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入框架开发（使用命令行工具可代替上面步骤）</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">创建Git仓库并上传</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">添加单元测试功能</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">添加端对端测试功能</span><span class="suffix"></span></h2>
<h2 data-tool="mdnice编辑器" style="margin-top: 30px; margin-bottom: 15px; padding: 0px; font-weight: bold; color: black; font-size: 22px; text-align: left; margin: 20px 10px 0px 0px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-family: STHeitiSC-Light; font-size: 18px; font-weight: bolder; display: inline-block; padding-left: 10px; border-left: 5px solid rgb(248,57,41);">引入jenkins启动CI&amp;CD服务</span><span class="suffix"></span></h2>
<p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="padding-top: 8px; padding-bottom: 8px; color: black; margin: 10px 10px; line-height: 1.75; letter-spacing: 0.2em; font-size: 14px; word-spacing: 0.1em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="text-decoration: none; word-wrap: break-word; font-weight: bold; color: rgb(248,57,41); border-bottom: 1px solid #ff3502; font-family: STHeitiSC-Light;">mdnice</a> 排版</p></section>
