/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const ans: number[][] = []
  const used = new Set<number>()
  function backTracking(arr: number[] = []) {
    if (arr.length === nums.length) {
      ans.push([...arr])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (used.has(num))
        continue
      arr.push(num)
      used.add(num)
      backTracking(arr)
      arr.pop()
      used.delete(num)
    }
  }
  backTracking()
  return ans
};
// @lc code=end
