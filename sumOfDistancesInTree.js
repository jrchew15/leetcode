function sumOfDistancesInTree(n, edges) {
    // create adjacency list and recursively count nodes in subtree
    // given parent's value (x), the child's value is x + n - 2m

    let sizes = new Array(n).fill(1);

    let adj = new Array(n);
    let visited = new Set();
    let tree = new Set().add(0);

    for (let i=0; i < n; i++) {
        adj[i] = new Set()
    }

    for (let edge in edges) {
        if (visited.has())
    }
}
