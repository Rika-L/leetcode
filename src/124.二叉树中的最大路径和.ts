/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity
  const { max } = Math

  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return 0
    }

    const lVal = dfs(node.left)
    const rVal = dfs(node.right)

    res = max(res, node.val + lVal + rVal)

    return max(0, (max(lVal, rVal) + node.val))
  }

  dfs(root)

  return res
};
// @lc code=end
