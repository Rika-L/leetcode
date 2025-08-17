/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  function quickSort(nums: number[], start: number, end: number) {
    if (start >= end) {
      return
    }
    const mid = partition(nums, start, end)
    quickSort(nums, start, mid - 1)
    quickSort(nums, mid + 1, end)
  }
  function partition(nums: number[], start: number, end: number) {
    const pivot = nums[start]
    let left = start + 1
    let right = end
    while (left < right) {
      while (left < right && nums[left] <= pivot) {
        left++
      }
      while (left < right && nums[right] >= pivot) {
        right--
      }
      if (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
      }
    }
    if (left === right && nums[right] > pivot) {
      right--
    }
    if (right !== start) {
      [nums[start], nums[right]] = [nums[right], nums[start]]
    }
    return right
  }
  quickSort(nums, 0, nums.length - 1)
  return nums
};
// @lc code=end

it('912', () => {
  expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5])
  expect(sortArray([5, 1, 1, 2, 0, 0])).toStrictEqual([0, 0, 1, 1, 2, 5])
})
