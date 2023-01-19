const deleteDuplicates = function (head) {
    let dummy = new ListNode()
    dummy.next = head

    let prev = dummy
    let current = head

    while (current && current.next) {
        // Check if something to delete
        if (current.val === current.next.val) {
            // find the end of chain of repeats
            while (current.val === (current.next ? current.next.val : null)) {
                current = current.next
            }
            // reassign to skip over repeats
            prev.next = current.next
        } else {
            // increment previous only if no deletions
            prev = current
        }
        current = current.next
    }

    return dummy.next
};
