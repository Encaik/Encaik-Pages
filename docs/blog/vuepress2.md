# Vuepress搭建博客(二)——部署页面

## 部署博客至Github Pages

在 docs/.vuepress/config.js 中设置正确的 base。

如果你打算发布到 <https://USERNAME.github.io/>，则可以省略这一步，因为 base 默认即是 "/"。

如果你打算发布到 <https://USERNAME.github.io/REPO/>（也就是说你的仓库在 <https://github.com/USERNAME/REPO）>，则将 base 设置为 "/REPO/"。

在你的项目中，创建一个如下的 deploy.sh 文件:

```sh
# !/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

## 部署博客至Netlify

1. 在 Netlify 中, 创建一个新的 GitHub 项目，使用以下设置：

    - Build Command: npm run build:docs 或者 yarn build:docs
    - Publish directory: docs/.vuepress/dist

2. 点击 deploy 按钮！
