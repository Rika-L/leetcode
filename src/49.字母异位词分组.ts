/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()
  for (const str of strs) {
    const newStr = str.split('').sort().join('') // 排序后返回新字符串
    map.set(newStr, [...(map.get(newStr) || []), str])
  }
  const res: string[][] = []

  map.forEach(val => res.push(val))

  return res
};
// @lc code=end

it('49', () => {
  const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
  const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]

  // 检查分组数量是否正确
  expect(result.length).toBe(expected.length)

  // 检查每个预期分组是否存在于结果中
  for (const expectedGroup of expected) {
    const found = result.some(resultGroup =>
      resultGroup.length === expectedGroup.length
      && expectedGroup.every(str => resultGroup.includes(str)),
    )
    expect(found).toBe(true)
  }
})
