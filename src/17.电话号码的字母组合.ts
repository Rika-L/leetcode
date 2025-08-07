/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const numsMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
} as any
function letterCombinations(digits: string): string[] {
  if (!digits)
    return []
  const res: string[] = []
  function dfs(str: string, item: string) {
    if (!str) {
      res.push(item)
      return
    }
    const num = str[0]
    const letters = numsMap[num]
    for (const letter of letters) {
      dfs(str.slice(1), item + letter)
    }
  }
  dfs(digits, '')
  return res
};
// @lc code=end

it('17', () => {
  expect(letterCombinations('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
