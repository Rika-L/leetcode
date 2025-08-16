// 全局类型声明：无需 import 即可使用
declare global {
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null)
  }

  class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)
  }
}

export {}
