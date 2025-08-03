/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 双指针
function moveZeroes(nums: number[]): void {
  let slow = 0 // slow记录了非0的个数 只要将不是非零的全部替换成0 即可
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++ // 不是0 计数
    }
  }
  nums.fill(0, slow)
};
// @lc code=end
