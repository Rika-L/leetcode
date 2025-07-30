/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  sums: number[] = [0]

  constructor(nums: number[]) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      sum += num
      this.sums[i + 1] = sum
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
