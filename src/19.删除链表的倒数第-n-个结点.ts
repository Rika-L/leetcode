/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode: ListNode = { next: head, val: 0 }
  let fast = dummyNode.next
  let slow: ListNode | null = dummyNode
  while (n--) {
    fast = fast!.next
  }
  while (fast) {
    fast = fast.next
    slow = slow!.next
  }
  slow!.next = slow!.next!.next
  return dummyNode.next
};
// @lc code=end
