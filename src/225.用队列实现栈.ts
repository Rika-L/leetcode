/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
  private queue: number[] = []
  constructor() {

  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift()!)
    }
    return this.queue.shift()!
  }

  top(): number {
    return this.queue[this.queue.length - 1]
  }

  empty(): boolean {
    return !this.queue.length
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

it('225', () => {
  const stack = new MyStack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  expect(stack.pop()).toBe(4)
  expect(stack.top()).toBe(3)
  expect(stack.empty()).toBe(false)
  stack.pop()
  stack.pop()
  stack.pop()
  expect(stack.empty()).toBe(true)
})
