/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []
  function dfs(node: TreeNode | null, path: number[]) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      path.push(node.val)
      res.push(path.join('->'))
      path.pop()
    }
    else {
      path.push(node.val)

      dfs(node.left, path)
      dfs(node.right, path)

      path.pop()
    }
  }
  dfs(root, [])
  return res
};
// @lc code=end
