/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  let res = Infinity
  if (!root)
    return 0
  function dfs(node: TreeNode, count = 1) {
    if (!node.left && !node.right) {
      res = Math.min(res, count)
    }
    else {
      count = count + 1
      node.left && dfs(node.left, count)
      node.right && dfs(node.right, count)
    }
  }
  dfs(root)
  return res
};
// @lc code=end
