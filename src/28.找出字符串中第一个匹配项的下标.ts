/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const str = haystack.slice(i, needle.length + i)
      if (str === needle)
        return i
    }
  }
  return -1
};
// @lc code=end
