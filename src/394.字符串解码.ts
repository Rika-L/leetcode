/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  const numStack: number[] = []
  const strStack: string[] = []
  let num = 0 // 存储倍数
  let result = ''
  for (const letter of s) {
    if (!isNaN(letter as any)) { // 如果是数字 做倍数处理
      num = num * 10 + Number(letter)
    }
    else if (letter === '[') { // 如果是 [ 把倍数存入栈中
      strStack.push(result)
      result = ''
      numStack.push(num)
      num = 0
    }
    else if (letter === ']') {
      console.log(strStack)
      const repeatTimes = numStack.pop() || 0 // 拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes)
    }
    else {
      result += letter
    }
  }

  return result
};
// @lc code=end

it('394. 字符串解码', () => {
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
  expect(decodeString('asd3[a2[c]]')).toBe('asdaccaccacc')
  expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
  expect(decodeString('abc3[cd]xyz')).toBe('abccdcdcdxyz')
  expect(decodeString('abc3[cd]xyz')).toBe('abccdcdcdxyz')
})
