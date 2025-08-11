/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = { next: head, val: 0 }
  if (!head)
    return null
  let node0 = dummyNode
  let node1: ListNode | null = head
  while (node1 && node1.next) {
    const node2: ListNode | null = node1.next
    const node3: ListNode | null = node2.next

    node0.next = node2
    node2.next = node1
    node1.next = node3

    node0 = node1
    node1 = node3
  }
  return dummyNode.next
};
// @lc code=end
