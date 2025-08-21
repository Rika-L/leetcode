/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function isPalindrome(arr: string): boolean {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right])
      return false
    left++
    right--
  }
  return true
}

function partition(s: string): string[][] {
  const res: string[][] = []
  function backtracking(arr: string[] = [], start = 0) {
    if (start === s.length) {
      res.push([...arr]) // 保存有效分割方案
      return
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.slice(start, i + 1))) {
        arr.push(s.slice(start, i + 1))
        backtracking(arr, i + 1)
        arr.pop()
      }
    }
  }
  backtracking()
  return res
};
// @lc code=end

it('131', () => {
  expect(partition('aab')).toEqual([['a', 'a', 'b'], ['aa', 'b']])
})
