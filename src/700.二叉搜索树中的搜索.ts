/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
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

// 层序秒了
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let res: TreeNode | null = null
  let queue: TreeNode[] = []
  if (!root)
    return res
  queue.push(root)
  while (queue.length) {
    const _queue = queue.slice()
    queue = []
    _queue.forEach((node) => {
      if (node.val === val)
        res = node
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    })
  }
  return res
};
// @lc code=end
