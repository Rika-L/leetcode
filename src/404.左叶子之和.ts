/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let res = 0
  function dfs(node: TreeNode | null) {
    if (!node)
      return
    if (node.left && !node.left.left && !node.left.right)
      res += node.left.val
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return res
};
// @lc code=end
