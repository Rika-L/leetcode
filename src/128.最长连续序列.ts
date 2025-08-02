/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let res = 0
  // 要放进map里以常数时间查找
  const set = new Set(nums)
  for (const x of set) {
    if (set.has(x - 1))
      continue

    let y = x + 1
    while (set.has(y)) {
      y += 1
    }
    res = Math.max(res, y - x)
  }
  return res
};
// @lc code=end

it('128', () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
})
