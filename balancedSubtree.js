class Node {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example 1: expected true
const node5 = Node(5)
const node4 = Node(4)
const node3 = Node(3, node4, node5)
const node2 = Node(2)
const root1 = Node(1, node2, node3)
/*
            1
          /   \
        2       3
              /   \
            4       5
*/

