/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length
  let ans = n + 1
  let sum = 0 // 子数组元素和
  let left = 0 // 子数组左端点
  for (let right = 0; right < n; right++) { // 枚举子数组右端点
    sum += nums[right]
    while (sum >= target) { // 满足要求
      ans = Math.min(ans, right - left + 1)
      sum -= nums[left]
      left++ // 左端点右移
    }
  }
  return ans <= n ? ans : 0
};
// @lc code=end

it('209', () => {
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
})
