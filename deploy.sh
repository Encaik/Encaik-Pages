#!/usr/bin/env sh
set -e
npm run docs:build
git add -A
git commit -m '自动提交'
git push -u gitee master
git push -u origin master
node ./gitee_pub.js
