/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const _x = x.toString()
  let left = 0
  let right = _x.length - 1
  while (left < right) {
    if (_x[left] !== _x[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end
