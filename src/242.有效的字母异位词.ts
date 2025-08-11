/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>()
  for (const letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1)
  }
  for (const letter of t) {
    map.set(letter, (map.get(letter) || 0) - 1)
  }
  for (const item of map) {
    if (item[1]) {
      return false
    }
  }
  return true
};
// @lc code=end

it('242', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
  expect(isAnagram('anagram', 'rat')).toBe(false)
})
