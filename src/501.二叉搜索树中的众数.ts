/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

function findMode(root: TreeNode | null): number[] {
  let res: number[] = []
  if (!root)
    return res
  let max = 1
  let count = 0
  let pre = root.val
  function dfs(node: TreeNode | null) {
    if (!node)
      return
    dfs(node.left)

    if (pre === node.val) {
      count++
    }
    else {
      pre = node.val
      count = 1
    }
    if (count > max) {
      max = count
      res = [node.val]
    }
    else if (count === max) {
      res.push(node.val)
    }

    dfs(node.right)
  }
  dfs(root)
  return res
};
// @lc code=end
