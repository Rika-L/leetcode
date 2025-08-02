/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let res: number[] = []
  const map = new Map<number, number>()
  nums.forEach((item, index) => {
    if (map.has(target - item)) {
      res = [map.get(target - item)!, index]
    }
    map.set(item, index)
  })
  return res
};
// @lc code=end

it('1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})
