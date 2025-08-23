/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []
  const _nums = nums.sort((a, b) => a - b)
  function backtracking(arr: number[], start = 0) {
    res.push([...arr])
    if (start > _nums.length)
      return
    for (let i = start; i < _nums.length; i++) {
      if (i > start && _nums[i] === _nums[i - 1]) {
        continue
      }
      arr.push(_nums[i])
      backtracking(arr, i + 1)
      arr.pop()
    }
  }
  backtracking([])
  return res
};
// @lc code=end

it('90', () => {
  expect(subsetsWithDup([1, 2, 2])).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
})
