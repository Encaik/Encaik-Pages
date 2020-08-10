# 力扣的打卡记录

[[toc]]

## 起因

因为偶然想起 leecode，上去做了个打卡题，虽然通过但是应该还有优化空间，于是想留个优化的记录，方便之后思考。

## 2020-7-24 打卡

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

## 2020-7-27 打卡

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

## 2020-7-28 打卡

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

## 2020-7-30 打卡

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

## 2020-7-31 打卡

面试题 08.03.魔术索引

难度：简单

[题目链接](https://leetcode-cn.com/problems/magic-index-lcci/)

初次完成代码：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == index) {
      return index;
    }
  }
  return -1;
};
```

之后将返回体略作简化

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  for (let index = 0; index < nums.length; index++)
    if (nums[index] == index) return index;
  return -1;
};
```

## 2020-8-3 打卡

415.字符串相加

难度：简单

[题目链接](https://leetcode-cn.com/problems/add-strings/)

初次完成代码：

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  return String(parseInt(num1) + parseInt(num2));
};
```

这段代码通过了执行，但是在提交时出错，经过检查发现是数字超出了 js 的最大整数导致精度丢失。想到 js 应该没有长整型的概念，已经打算手写加法的我，突然想要搜一下，结果发现了长整型的提案，于是尝试了一下：

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  return String(BigInt(num1) + BigInt(num2));
};
```

## 2020-8-4 打卡

207.课程表

难度：中等

[题目链接](https://leetcode-cn.com/problems/course-schedule/submissions/)

初次完成代码：

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let map = {};
  for (let course = 0; course < numCourses; course++) {
    map[course] = [];
    for (let index = 0; index < prerequisites.length; index++) {
      if (prerequisites[index][0] === course) {
        map[course].push(prerequisites[index][1]);
      }
    }
  }
  let learn = "";
  while (true) {
    for (let index of Object.keys(map)) {
      if (map[index].length == 0) {
        learn = index;
      }
    }
    if (learn == "" && JSON.stringify(map) != "{}") {
      return false;
    } else if (learn == "" && JSON.stringify(map) == "{}") {
      return true;
    }
    for (let index of Object.keys(map)) {
      if (index == learn) {
        delete map[index];
      } else if (map[index].indexOf(parseInt(learn)) > -1) {
        let pos = map[index].indexOf(parseInt(learn));
        map[index].splice(pos, 1);
      }
    }
    learn = "";
  }
};
```

可以看出来题目是想要在有向图中寻找有无通路，但因为数据结构基础差，所以先用本办法做了出来

## 2020-8-6 打卡

336.回文对

难度：困难

[题目链接](https://leetcode-cn.com/problems/palindrome-pairs/)

初次完成代码：

```js
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let res = [];
  let rwords = words.map(i => {
    return i
      .split("")
      .reverse()
      .join("");
  });
  for (let x = 0; x < words.length; x++) {
    for (let y = 0; y < words.length; y++) {
      if (y == x) {
        continue;
      }
      let str = words[x] + words[y];
      let rstr = rwords[y] + rwords[x];
      if (str === rstr) {
        res.push([x, y]);
      }
    }
  }
  return res;
};
```

此次是通过暴力破解的办法完成此题目，但是可以有优化的地方

## 2020-8-10 打卡

696.计数二进制子串

难度：简单

[题目链接](https://leetcode-cn.com/problems/count-binary-substrings/)

初次完成代码：

```js
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let str = s.match(/(1+|0+)/g);
  let count = 0;
  for (let index = 0; index < str.length - 1; index++) {
    count = count + Math.min(str[index].length, str[index + 1].length);
  }
  return count;
};
```
