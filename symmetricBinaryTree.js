// iterative level order traversal
var isSymmetric = function (root) {
    let q = [root];
    let depth = 0;
    while (q.some(x => x)) {
        for (let i = 0; i < 2 ** (depth - 1); i++) {
            if (!q[i] || !q[q.length - i - 1]) {
                if (!q[i] && !q[q.length - i - 1]) continue
                return false
            }
            if (q[i].val !== q[q.length - i - 1].val) return false
        }
        let temp = []
        for (let node of q) {
            if (!node) {
                temp.push(null);
                temp.push(null);
            } else {
                temp.push(node.left)
                temp.push(node.right)
            }
        }
        q = temp
        depth++
    }
    return true
};
