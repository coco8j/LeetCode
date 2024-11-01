/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;

    if (root.left?.val !== root.right?.val) return false;

    return symmetricJunior(root.left, root.right);
};

function symmetricJunior(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

console.log(node1.val, node2.val)

    return (node1.val === node2.val)
    && symmetricJunior(node1.left, node2.right) 
    && symmetricJunior(node2.left, node1.right)
}