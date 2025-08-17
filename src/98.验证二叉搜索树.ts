/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  let pre = -Infinity
  function dfs(node: TreeNode | null) {
    if (node == null) {
      return true
    }
    if (!dfs(node.left)) { // 左
      return false
    }
    if (node.val <= pre) { // 中
      return false
    }
    pre = node.val
    return dfs(node.right) // 右
  }
  return dfs(root)
};
// @lc code=end
