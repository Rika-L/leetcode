/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = []
  for (const letter of s) {
    if (letter === '(') {
      stack.push(')')
    }
    else if (letter === '[') {
      stack.push(']')
    }
    else if (letter === '{') {
      stack.push('}')
    }
    else {
      if (letter !== stack.pop())
        return false
    }
  }
  if (stack.length)
    return false
  return true
};
// @lc code=end

it('20', () => {
  // expect(isValid('([)]')).toBe(false)
  // expect(isValid('()')).toBe(true)
  // expect(isValid('()[]{}')).toBe(true)
  // expect(isValid('(]')).toBe(false)
  expect(isValid('[')).toBe(false)
})
