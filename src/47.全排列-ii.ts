/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const resArr: number[][] = []
  const usedArr: boolean[] = Array.from({ length: nums.length }, () => false)
  backTracking(nums, [])
  return resArr
  function backTracking(nums: number[], route: number[]): void {
    if (route.length === nums.length) {
      resArr.push([...route])
      return
    }
    for (let i = 0, length = nums.length; i < length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false)
        continue
      if (usedArr[i] === false) {
        route.push(nums[i])
        usedArr[i] = true
        backTracking(nums, route)
        usedArr[i] = false
        route.pop()
      }
    }
  }
};
// @lc code=end
