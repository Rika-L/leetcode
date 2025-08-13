/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map()
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }
  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(i => i[0])
};
// @lc code=end
