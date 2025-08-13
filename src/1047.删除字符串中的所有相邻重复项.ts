/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const letter of s) {
    if (stack[stack.length - 1] === letter) {
      stack.pop()
    }
    else {
      stack.push(letter)
    }
  }
  return stack.join('')
};
// @lc code=end

it('1047', () => {
  expect(removeDuplicates('abbaca')).toBe('ca')
})
