# 力扣的打卡记录

## 起因

因为偶然想起 leecode，上去做了个打卡题，虽然通过但是应该还有优化空间，于是想留个优化的记录，方便之后思考。

## 第一次打卡

1025.除数博弈

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

然后发现可以直接用 N%2 代替逻辑判断，于是精简出最终版本：

```js
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  return !(N % 2);
};
```

## 第二次打卡

392.判断子序列

难度：简单

[题目链接](https://leetcode-cn.com/problems/is-subsequence/)

初次完成代码：

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === t.length) {
    if (s == t) {
      return true;
    } else {
      return false;
    }
  } else if (s.length > t.length) {
    return false;
  }
  let str = s.split("");
  let lstr = t;
  for (let x = 0; x < str.length; x++) {
    let temp = lstr.split(str[x]);
    if (temp.length == 2) {
      temp.shift();
      lstr = temp.join("");
    } else if (temp.length > 2) {
      temp.shift();
      lstr = temp.join(str[x]);
    } else {
      return false;
    }
  }
  return true;
};
```

## 第三次打卡

104.二叉树的最大深度

难度：简单

[题目链接](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

初次完成代码：

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0;
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};
```

## 第四次打卡

343.整数拆分

难度：中等

[题目链接](https://leetcode-cn.com/problems/integer-break/)

初次完成代码：

```js
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let num = Math.ceil(n / 2);
  let res = 0;
  for (; num > 0; num--) {
    if (n % num === 0) {
      let temp = Math.pow(num, n / num);
      res = Math.max(res, temp);
    } else if (Math.floor(n / num) === 1) {
      let temp = num * (n - num);
      res = Math.max(res, temp);
    } else if (n % num > num / 2) {
      let temp = Math.pow(num, Math.floor(n / num)) * (n % num);
      res = Math.max(res, temp);
    } else if (n % num < num / 2) {
      let temp = Math.pow(num, Math.floor(n / num) - 1) * (num + (n % num));
      res = Math.max(res, temp);
    }
  }
  return res;
};
```

简化代码时发现，当余数刚好等于除数的一半的时候，这种情况没有判断到，因此添加了这一判断

```js
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let num = Math.ceil(n / 2);
  let res = 0;
  for (; num > 0; num--) {
    let temp = 0;
    if (n % num === 0) {
      temp = Math.pow(num, n / num);
    } else if (Math.floor(n / num) === 1) {
      temp = num * (n - num);
    } else if (n % num > num / 2) {
      temp = Math.pow(num, Math.floor(n / num)) * (n % num);
    } else if (n % num <= num / 2) {
      temp = Math.pow(num, Math.floor(n / num) - 1) * (num + (n % num));
    }
    res = Math.max(res, temp);
  }
  return res;
};
```
