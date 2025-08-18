/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function dfs(currentNode: TreeNode | null, targetNode: TreeNode | null, path: TreeNode[]) {
  if (!currentNode || !targetNode)
    return false
  path.push(currentNode)
  if (currentNode.val === targetNode.val || dfs(currentNode.left, targetNode, path) || dfs(currentNode.right, targetNode, path)) {
    return true
  }
  else {
    path.pop()
    return false
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 分别找出路径
  // 遍历查看最后的相同点
  const path1: TreeNode[] = []
  const path2: TreeNode[] = []
  dfs(root, p, path1)
  dfs(root, q, path2)
  let ans = null
  for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
    if (path1[i] === path2[i])
      ans = path1[i]
  }
  return ans
};

// @lc code=end
