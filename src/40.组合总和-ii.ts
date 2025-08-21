/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  candidates = candidates.sort((x, y) => x - y)
  function backtracking(arr: number[], start: number, target: number) {
    if (target < 0)
      return
    if (target === 0) {
      res.push([...arr])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      } // 关键去重 如果 j>i 并且candidates[i] === candidates[i - 1] 说明当前数字与上一个数字相同 可以跳过搜索
      arr.push(candidates[i])
      backtracking(arr, i + 1, target - candidates[i])
      arr.pop()
    }
  }
  backtracking([], 0, target)

  return res
};
// @lc code=end

it('40', () => {
  expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ])
})
