/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let left = 0 // 左指针
  let right = nums.length - 1 // 右指针
  const res: number[] = []
  while (left <= right) {
    const lVal = nums[left] ** 2
    const rVal = nums[right] ** 2
    if (lVal >= rVal) {
      res.unshift(lVal) // 倒序插入
      left++
    }
    else {
      res.unshift(rVal)
      right--
    }
  }
  return res
};
// @lc code=end

it('977', () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100])
})
