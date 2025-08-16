/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length)
    return null
  const rootVal = postorder.pop()!
  const root = new TreeNode(rootVal)
  const index = inorder.indexOf(rootVal)
  const leftInorder = inorder.slice(0,index)
  const rightInorder = inorder.slice(index + 1)
  
  const leftPostorder = postorder.slice(0, leftInorder.length)
  const rightPostorder = postorder.slice(leftInorder.length)

  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)

  return root
};
// @lc code=end
