class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const isNull = (x: TreeNode | null): boolean => x === null
function isCompleteTree(root: TreeNode | null): boolean {
    // level order traversal, once null, check next queue and this queue
    let q: Array<TreeNode | null> = [root]
    while (q.length) {
        let next_q: Array<TreeNode | null> = [];
        let width: number = q.length;
        for (let i = 0; i < width; i++) {
            let curr: TreeNode | null = q.shift() || null;
            if (!curr) return q.every(isNull) && next_q.every(isNull)
            next_q.push(curr.left)
            next_q.push(curr.right)
        }
        q = next_q
    }
    return true
};
