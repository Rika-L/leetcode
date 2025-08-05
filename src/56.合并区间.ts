/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((x, y) => x[0] - y[0]) // 按照左端点从小到大排序

  const res: number[][] = []

  for (const p of intervals) {
    const len = res.length
    if (len && p[0] <= res[len - 1][1]) { // 可以合并
      res[len - 1][1] = Math.max(res[len - 1][1], p[1])
    }
    else {
      res.push(p)
    }
  }

  return res
};
// @lc code=end

it('56', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]])
})
