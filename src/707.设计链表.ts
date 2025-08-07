/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
class LinkNode {
  val: number
  next: LinkNode | null
  constructor(val: number, next: LinkNode) {
    this.val = val
    this.next = next
  }
}

class MyLinkedList {
  size: number
  head: LinkNode | null
  tail: LinkNode | null

  constructor() {
    this.head = null // head节点
    this.tail = null // 尾节点
    this.size = 0 // 长度
  }

  getNode(index: number): LinkNode {
    let cur = new LinkNode(0, this.head) // 哨兵节点
    while (index-- >= 0) cur = cur.next
    return cur
  }

  get(index: number): number {
    if (index < 0 || index >= this.size)
      return -1
    return this.getNode(index).val
  }

  addAtHead(val: number): void {
    let node = new LinkNode(val, this.head)
    this.head = node
    this.size++

    // 没有尾结点，说明只有一个 node 节点，记录尾结点
    if (!this.tail)
      this.tail = node
  }

  addAtTail(val: number): void {
    let node = new LinkNode(val, null)
    this.size++
    // 有尾结点
    if (this.tail) {
      // 更新尾结点
      this.tail.next = node
      this.tail = node
      return
    }
    // 没有尾结点，说明只有一个节点
    this.tail = node
    this.head = node
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size)
      return

    if (index <= 0) {
      this.addAtHead(val)
      return
    }

    if (index === this.size) {
      this.addAtTail(val)
      return
    }

    // 其他情况
    let node = this.getNode(index - 1)
    node.next = new LinkNode(val, node.next)
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size)
      return

    // 删除头结点
    if (index === 0) {
      this.head = this.head.next
      this.size--
      return
    }

    // 删除中间、尾节点
    let node = this.getNode(index - 1)
    node.next = node.next.next

    // 如果 index 是尾结点，更新尾结点
    if (index === this.size - 1) {
      this.tail = node
    }
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
