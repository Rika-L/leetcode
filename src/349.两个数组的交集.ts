/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1)
  const res = new Set<number>()
  for (const num of nums2) {
    if (set.has(num)) {
      res.add(num)
    }
  }
  return [...res]
};
// @lc code=end

it('349', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toStrictEqual([2])
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([9, 4])
})
