/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] > target) {
      right = middle - 1
    }
    else if (nums[middle] < target) {
      left = middle + 1
    }
    else {
      return middle
    }
  }

  return -1
};
// @lc code=end

it('704', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
})
