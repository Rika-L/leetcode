/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let res = 0
  let left = 0
  let right = height.length - 1
  const { max, min } = Math
  while (left < right) {
    res = max(res, min(height[left], height[right]) * (right - left))
    if (height[left] > height[right]) {
      right--
    }
    else {
      left++
    }
  }

  return res
};
// @lc code=end

it('11', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
})
