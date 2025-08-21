/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = []

  function backTracking(arr: number[], start: number) {
    if (arr.length === k) {
      res.push([...arr])
    }

    for (let i = start; i <= n; i++) {
      arr.push(i)
      backTracking(arr, i + 1)
      arr.pop()
    }
  }
  backTracking([], 1)
  return res
};
// @lc code=end

it('77', () => {
  expect(combine(4, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ])
})
