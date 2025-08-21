/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  function backtracking(arr: number[], start: number, target: number) {
    if (target < 0)
      return
    if (target === 0)
      res.push([...arr])
    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i]
      arr.push(num)
      backtracking(arr, i, target - num)
      arr.pop()
    }
  }
  backtracking([], 0, target)
  return res
};
// @lc code=end

it('39', () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
})
