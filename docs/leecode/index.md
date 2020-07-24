# 力扣的打卡记录

## 起因

因为偶然想起 leecode，上去做了个打卡题，虽然通过但是应该还有优化空间，于是想留个优化的记录，方便之后思考。

## 第一次打卡

1025. 除数博弈

难度：简单

[题目链接](https://leetcode-cn.com/problems/divisor-game/)

初次完成代码：

```js
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  let n = N;
  let isAls = true;
  let x = 0;
  let nums = [];
  let numslen = 0;
  while (true) {
    //1.选出所有可选的x
    for (let index = 1; index < n; index++) {
      if (n % index == 0) {
        nums.push(index);
      }
    }
    //2.选择x计算
    numslen = nums.length;
    if (isAls) {
      isAls = false;
      if (numslen == 0) {
        return false;
      }
      x = nums[0];
      if (n - x <= 0) {
        return false;
      }
      n = n - x;
    } else {
      isAls = true;
      if (numslen == 0) {
        return true;
      }
      x = nums[0];
      if (n - x <= 0) {
        return true;
      }
      n = n - x;
    }
  }
};
```

将每次选最小改为每次选最大后，出错，经过反复推算，应该是这道题只能选最小，即轮流减一，谁先到 1 谁输，根据这个规律可以直接精简程序至如下：

```js
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  if (N % 2 == 0) return true;
  return false;
};
```
