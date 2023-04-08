var cloneGraph = function (node) {
    if (!node) return null;
    const visited = new Map();
    let root = new Node(node.val);
    visited.set(node, root);
    let stack = [node];
    while (stack.length) {
        let curr = stack.pop();
        let copy = visited.get(curr);
        for (let x of curr.neighbors) {
            if (visited.has(x)) {
                copy.neighbors.push(visited.get(x))
            } else {
                let temp = new Node(x.val);
                stack.push(x);
                copy.neighbors.push(temp);
                visited.set(x, temp);
            }
        }
    }
    return root;
};
