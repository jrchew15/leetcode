class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node1 = ListNode(1);
let node2 = ListNode(2);
let node3 = ListNode(3);
let node4 = ListNode(4);
let node5 = ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

 var removeNthFromEnd = function(head, n) {
    // two pointers: current and n+1 behind;

    let trailing = head;
    let current = head;
    let count = 0;
    while (current) {
        current = current.next;
        if (count > n) trailing = trailing.next;
        count++;
    }
    if (trailing === head && count <= n) return head.next;
    trailing.next = trailing.next.next;
    return head;
};

removeNthFromEnd(node1,2)
