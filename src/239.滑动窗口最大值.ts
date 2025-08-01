/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
// 实现一个双向队列
class MyQueue {
  queue: number[] = []
  constructor() {}
  getTop(): number | undefined {
    return this.queue[0]
  }

  public shift(val: number) {
    const top: number | undefined = this.queue[0]
    if (top !== undefined && top === val)
      this.queue.shift()
  }

  push(val: number) {
    let back: number | undefined = this.queue[this.queue.length - 1]
    // 保证队列头部是最大的值
    while (back !== undefined && back < val) {
      this.queue.pop()
      back = this.queue[this.queue.length - 1]
    }
    this.queue.push(val)
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const myQueue: MyQueue = new MyQueue()
  let i: number = 0
  let j: number = 0
  const resArr: number[] = []
  while (j < k) {
    myQueue.push(nums[j++])
  }
  resArr.push(myQueue.getTop()!)
  while (j < nums.length) {
    myQueue.push(nums[j])
    myQueue.shift(nums[i])
    resArr.push(myQueue.getTop()!)
    j++
    i++
  }
  return resArr
};

// @lc code=end

it('239', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7])
})
