# 日常刷题

## 1480.一维数组的动态和

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  return nums.map(function(t, i) {
    let sum = 0;
    for (let index = 0; index < i + 1; index++) {
      sum += nums[index];
    }
    return sum;
  });
};
```
