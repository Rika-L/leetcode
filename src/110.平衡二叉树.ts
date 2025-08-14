/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): number {
    if (!node)
      return 0

    const leftHeight = dfs(node.left)
    const rightHeight = dfs(node.right)

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1 // 不平衡
    }

    return Math.max(leftHeight, rightHeight) + 1 // 返回当前节点的高度
  }

  return dfs(root) !== -1 // 如果返回值不是 -1，则树是平衡的
};
// @lc code=end
