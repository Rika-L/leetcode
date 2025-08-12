/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  const words = s.trim().split(/\s+/)

  words.reverse()
  return words.join(' ')
};
// @lc code=end

it('541', () => {
  expect(reverseWords('a good   example')).toBe('example good a')
})
