/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy: ListNode = { val: Number.NaN, next: head }
  let pre = dummy
  while (pre.next) {
    if (pre.next.val === val) {
      pre.next = pre.next.next
    }
    else {
      pre = pre.next
    }
  };
  return dummy.next
}
// @lc code=end
