/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
// 双重循环 事件复杂度为O(n^2)
function subarraySum(nums: number[], k: number): number {
  let res = 0
  let curIndex = 0
  while (curIndex < nums.length) {
    let sum = nums[curIndex]
    if (sum === k)
      res++
    for (let i = curIndex + 1; i < nums.length; i++) {
      sum += nums[i]
      if (sum === k) {
        res++
      }
    }
    curIndex++
  }

  return res
};

function subarraySum2(nums: number[], k: number): number {
  // 用一个map来存储某前缀和一共出现了多少次
  const hash = new Map([[0, 1]])
  let sum = 0 // 当前和
  let ans = 0 // 答案

  for (const n of nums) {
    sum += n
    // sum2 - sum1 = k
    ans += hash.get(sum - k) || 0 // 获取的是sum1的前缀和的出现次数
    hash.set(sum, (hash.get(sum) || 0) + 1)
  }

  return ans
}
// @lc code=end
