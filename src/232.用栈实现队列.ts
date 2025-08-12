/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  private stack1: number[]
  private stack2: number[]
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x: number): void {
    this.stack1.push(x)
    console.log(this.stack1)
  }

  private move(): void {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
  }

  pop(): number {
    this.move()
    return this.stack2.pop()!
  }

  peek(): number {
    this.move()
    return this.stack2[this.stack2.length - 1]
  }

  empty(): boolean {
    return !this.stack1.length && !this.stack2.length
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

it('232', () => {
  const queue = new MyQueue()
  queue.push(2)
  queue.push(3)
  queue.push(4)
  queue.push(5)
  expect(queue.pop()).toBe(2)
  expect(queue.peek()).toBe(3)
  expect(queue.empty()).toBe(false)
  queue.pop()
  queue.pop()
  queue.pop()
  expect(queue.empty()).toBe(true)
})
