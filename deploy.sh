#!/usr/bin/env sh
set -e
npm run docs:build
git add -A
git commit -m 'deploy'
git push -u gitee master
git push -u origin master
