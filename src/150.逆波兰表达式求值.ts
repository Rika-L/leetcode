/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: string[] = []
  for (const letter of tokens) {
    if ((['+', '-', '*', '/'].includes(letter))) {
      const right = Number(stack.pop()!)
      const left = Number(stack.pop()!)
      if (letter === '+') {
        stack.push((left + right).toString())
      }
      else if (letter === '-') {
        stack.push((left - right).toString())
      }
      else if (letter === '*') {
        stack.push((left * right).toString())
      }
      else if (letter === '/') {
        stack.push(Math.trunc(left / right).toString())
      }
    }
    else {
      stack.push(letter)
    }
  }
  return Number(stack[0])
};
// @lc code=end

it('150', () => {
  expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9)
  expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22)
})
