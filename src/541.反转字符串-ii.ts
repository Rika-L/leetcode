/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const _s = s.split('')
  const len = s.length
  function reverse(left: number, right: number): void {
    while (left < (left + right) / 2) {
      const tmp = _s[left]
      _s[left] = _s[right]
      _s[right] = tmp
      left++
      right--
    }
  };
  for (let i = 0; i < len; i += 2 * k) {
    const left = i
    const right = Math.min(len, i + k) - 1

    reverse(left, right)
  }

  return _s.join('')
};
// @lc code=end

it('541', () => {
  expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
})
