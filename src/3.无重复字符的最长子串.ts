/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let left = 0
  let right = 0
  let maxLen = 0
  while (right < s.length) {
    const letter = s[right]
    // 遇到与之前相同的就把left移过来
    if (map.has(letter)) {
      const i = map.get(letter)! + 1
      left = left > i ? left : i
    }
    // 保存当前的右侧指针位置
    map.set(letter, right)
    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }
  return maxLen
};
// @lc code=end
