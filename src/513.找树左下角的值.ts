/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 层序遍历秒了
function findBottomLeftValue(root: TreeNode | null): number {
  let res: number = 0
  let queue: TreeNode[] = []
  if (!root)
    return res
  queue.push(root)
  while (queue.length) {
    const arr: number[] = []
    const _queue = queue.slice()
    queue = []
    _queue.forEach((node) => {
      arr.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    })
    res = arr[0]
  }
  return res
};
// @lc code=end
