class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var buildTree = function (inorder, postorder) {
    if (inorder.length === 1) return new TreeNode(inorder[0])
    if (inorder.length === 0) return null

    let i = 0;
    let j = 0;
    let curr = null;
    while (i < inorder.length) {
        j = postorder.indexOf(inorder[i]);
        // console.log(i, j)
        curr = new TreeNode(inorder[i], curr, buildTree(inorder.slice(i+1, j), postorder.slice(i, j+1)));
        i = j+1
        j++
    }
    return curr
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
