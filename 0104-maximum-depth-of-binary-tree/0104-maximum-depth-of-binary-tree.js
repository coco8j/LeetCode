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
 * @return {number}
 */
var maxDepth = function (root) {
    let maxDepth = 0;
    let depth = 0;

    function searchChild(node) {
        depth += 1;

        if (depth > maxDepth) {
            maxDepth = depth;
        }

        if (node?.left) {
            searchChild(node.left);
        }

        if (node?.right) {
            if (node?.left) {
                depth -= 1;
            }
            searchChild(node.right)
        }
    }

    if (root != null) {
        searchChild(root);
    }

    return maxDepth;
};
