/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  let res = Infinity
  let pre: number | null = null
  function dfs(node: TreeNode | null) {
    if (!node)
      return
    dfs(node.left)

    if (pre !== null)
      res = Math.min(res, node.val - pre)
    pre = node.val

    dfs(node.right)
  }
  dfs(root)
  return res
};
// @lc code=end
