/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const len = nums.length
  const res: number[] = Array.from({ length: len })
  res[len - 1] = 1
  // 算出后缀积
  for (let i = len - 2; i >= 0; i--) {
    res[i] = res[i + 1] * nums[i + 1]
  }

  // 用前缀积算出结果数组 遍历更新前缀积
  let pre = 1
  for (let i = 0; i < len; i++) {
    res[i] *= pre
    pre *= nums[i]
  }

  return res
};
// @lc code=end

it('238', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6])
})
