const isNull = (x: TreeNode | null): boolean => x === null
function isCompleteTree(root: TreeNode | null): boolean {
    // level order traversal, once null, check next queue and this queue
    let q: Array<TreeNode | null> = [root]
    while (q.length) {
        let next_q: TreeNode[] = [];
        let width: number = q.length;
        for (let i = 0; i < width; i++) {
            let curr: TreeNode = q.shift();
            if (!curr) return q.every(isNull) && next_q.every(isNull)
            next_q.push(curr.left)
            next_q.push(curr.right)
        }
        q = next_q
    }
    return true
};
