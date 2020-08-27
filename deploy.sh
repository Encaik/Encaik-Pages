#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/Blog

git init
git add -A
git commit -m 'deploy'
git push -f https://gitee.com/encaik/encaik.git master

cd ../../../
git rm -r -f docs/.vuepress/Blog
