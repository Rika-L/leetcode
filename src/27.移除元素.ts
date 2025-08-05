/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === val) {
      continue
    }
    else {
      nums[left] = nums[right]
      left++
    }
  }

  return left
};
// @lc code=end

it('27', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
})
