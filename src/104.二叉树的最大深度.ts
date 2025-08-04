/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

import { nodeModuleNameResolver } from '../node_modules/typescript/lib/typescript'

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

function maxDepth(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, count: number): number {
    if (node === null) {
      return count
    }
    count++
    return Math.max(dfs(node.left, count), dfs(node.right, count))
  }
  return dfs(root, 0)
};
// @lc code=end
