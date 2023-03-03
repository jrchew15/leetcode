var partition = function (head, x) {
    let dummy = new ListNode(null, head);
    let curr = head;
    let insert = dummy;
    let prev = dummy;
    while (curr) {
        if (curr.val < x) {
            if (insert === prev) {
                prev = prev.next
                curr = curr.next
                insert = insert.next
                continue
            }
            // remove from flow
            prev.next = curr.next
            // insert
            curr.next = insert.next
            insert.next = curr
            // sequence appropriately
            insert = insert.next
            curr = prev.next
        } else {
            prev = prev.next
            curr = curr.next
        }
    }
    return dummy.next
};
