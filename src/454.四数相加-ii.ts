/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const cnt = new Map()
  for (const x of nums1) {
    for (const y of nums2) {
      cnt.set(x + y, (cnt.get(x + y) ?? 0) + 1)
    }
  }

  let ans = 0
  for (const x of nums3) {
    for (const y of nums4) {
      ans += cnt.get(-x - y) ?? 0
    }
  }
  return ans
};
// @lc code=end
