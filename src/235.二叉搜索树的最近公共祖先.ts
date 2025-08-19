/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === p || root === q)
    return root
  const a = root!.val
  const b = Math.min(p!.val, q!.val)
  const c = Math.max(p!.val, q!.val)
  if (a > b && a < c)
    return root
  else if (a < b)
    return lowestCommonAncestor(root!.right, p, q)
  else return lowestCommonAncestor(root!.left, p, q)
};
// @lc code=end
