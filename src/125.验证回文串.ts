/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  s = s.replace(/[\W_]/g, '').toLowerCase()
  return s.split('').reverse().join('') === s
};
// @lc code=end
