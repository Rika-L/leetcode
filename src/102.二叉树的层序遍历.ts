/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []
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
    res.push(arr)
  }
  return res
};
// @lc code=end
