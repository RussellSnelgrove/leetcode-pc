/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var dfs = function (node) {
    if (node === null) return 0;
    let rightHeight;
    let leftHeight;
    if (node.left) leftHeight = dfs(node.left);
    if (node.right) rightHeight = dfs(node.right);
    return Math.abs(leftHeight - rightHeight) < 2
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return dfs(root);
};