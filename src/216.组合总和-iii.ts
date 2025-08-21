/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  function backtracking(arr: number[], start: number, sum: number) {
    if (n < 0)
      return
    if (arr.length > k && sum > 0)
      return
    if (arr.length === k && sum === 0) {
      res.push([...arr])
    }
    for (let i = start; i <= 9; i++) {
      arr.push(i)
      backtracking(arr, i + 1, sum - i)
      arr.pop()
    }
  }
  backtracking([], 1, n)
  return res
};
// @lc code=end

it('216', () => {
  expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]])
})
