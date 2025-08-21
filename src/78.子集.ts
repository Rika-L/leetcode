/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  function backtracking(arr: number[], start = 0) {
    res.push([...arr])
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i])
      backtracking(arr, i + 1)
      arr.pop()
    }
  }
  backtracking([])
  return res
};
// @lc code=end

it('78', () => {
  expect(subsets([1, 2, 3])).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]])
})
