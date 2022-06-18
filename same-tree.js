function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSameTreeParallel = function (p, q) {
    if (p === null || q === null) { return p === null && q === null }
    if (p.val !== q.val) { return false }
    if (p.left && q.left && p.right && q.right) {
        if (p.left.val !== q.left.val) {
            if (p.left.val !== q.right.val || p.right.val !== q.left.val) { return false }
            return isSameTree(p.left.val, q.right.val) && isSameTree(p.right.val, q.left.val);
        }
        if (p.right.val !== q.right.val) { return false }
        return isSameTree(p.left.val, q.left.val) && isSameTree(p.right.val, q.right.val);
    } else if (!p.left && !p.right && !q.left && !q.right) { return true }
    if ([p.left, p.right, q.left, q.right].filter((ele) => ele).length % 2 !== 0) { return false }
    let p2 = p.left || p.right; let q2 = q.left || q.right;
    return p2.val === q2.val;
};

var isSameTree = function (p, q) {
    if (p === null || q === null) { return p === q }
    if (p.val !== q.val) { return false }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

let b = new TreeNode(2);
let c = new TreeNode(3);
let a = new TreeNode(1, b);

let y = new TreeNode(2);
let z = new TreeNode(3);
let x = new TreeNode(1, y);

console.log(isSameTree(a, x))
