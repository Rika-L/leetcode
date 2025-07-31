/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array.from({ length: temperatures.length }, () => 0) // 结果数组
  const stack: number[] = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      // 如果当前值大于栈中值 执行出栈操作 并算出前一个节点到当前节点的距离
      const t = stack.pop()!
      res[t] = i - t
    }
    stack.push(i)
  }
  return res
};
// @lc code=end

it('739', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0])
})
