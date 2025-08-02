/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const dp: number[] = [] // dp[i]的含义： 以nums[i]结尾的
  // 数组，它的子序和

  let res = dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])

    if (dp[i] > res) {
      res = dp[i]
    }
  }
  console.log(dp)

  return res
};
// @lc code=end

it('56', () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
})
