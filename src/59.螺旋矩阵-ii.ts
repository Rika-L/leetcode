/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  console.log(res)
  let x = 0
  let y = 0
  let count = 1
  let path = 'r'
  const target = n ** 2
  while (count <= target) {
    res[y][x] = count
    if (path === 'r') { // 向右
      if (res[y][x + 1] !== 0) {
        y += 1
        path = 'b'
      }
      else {
        x += 1
      }
    }
    else if (path === 'b') { // 向下
      if (!res[y + 1] || res[y + 1][x] !== 0) {
        x -= 1
        path = 'l'
      }
      else {
        y += 1
      }
    }
    else if (path === 'l') { // 向左
      if (res[y][x - 1] !== 0) {
        y -= 1
        path = 't'
      }
      else {
        x -= 1
      }
    }
    else if (path === 't') { // 向上
      if (res[y - 1][x] !== 0) {
        x += 1
        path = 'r'
      }
      else {
        y -= 1
      }
    }

    count++
  }
  return res
};
// @lc code=end

it('59', () => {
  expect(generateMatrix(3)).toStrictEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]])
})
