#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepress/blog
git init
git add -A
git commit -m 'deploy'
git push -f https://gitee.com/encaik/encaik.git master
cd ../
git rm -r -f ./blog
