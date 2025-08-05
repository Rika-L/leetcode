/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < nums.length; i++) { // 遍历nums 把元素放到正确位置上
    while (nums[i] >= 1 && nums[i] < len && nums[i] !== nums[nums[i] - 1]) {
      const j = nums[i] - 1; // 要被交换的位置
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  // 找到不在自己位置上的数字
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1)
      return i + 1
  }

  return len + 1
};
// @lc code=end

it('41', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3)
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
  expect(firstMissingPositive([1, 2, 3])).toBe(4)
  expect(firstMissingPositive([])).toBe(1)
})
