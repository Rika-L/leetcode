/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root) {
    if (root.val > key) {
      root.left = deleteNode(root.left, key)
    }
    else if (root.val < key) {
      root.right = deleteNode(root.right, key)
    }
    else {
      if (!root.left || !root.right) {
        root = root.left || root.right // 如果不是两边都不是叶子节点 直接赋值
      }
      else {
        let node = root.left
        while (node.right != null) {
          node = node.right // 找到右子树的最大值
        }
        node.left = deleteNode(root.left, node.val)
        node.right = root.right
        root = node
      }
    }
  }

  return root
};
// @lc code=end
