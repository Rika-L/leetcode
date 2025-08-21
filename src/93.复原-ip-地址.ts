/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const res: string[] = []
  function backtracking(arr: string[] = [], start = 0) {
    if (arr.length === 4 && start === s.length) {
      res.push(arr.join('.'))
      return
    }
    if (arr.length >= 4 || start >= s.length)
      return

    for (let i = start; i < s.length; i++) {
      const segment = s.slice(start, i + 1)
      if (segment.length > 3 || (segment.startsWith('0') && segment.length > 1) || Number.parseInt(segment) > 255) {
        continue
      }
      arr.push(segment)
      backtracking(arr, i + 1)
      arr.pop()
    }
  }
  backtracking([])
  return res
};
// @lc code=end

it('93', () => {
  expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0'])
})
