function reverseKGroup (head, k) {
    if (k === 1 || head.next === null) { return head }
    if (k === 2) {
        let waiting; let current = head; let newHead = current.next;
        while (current.next !== null && current.next.next !== null) {
            waiting = current.next.next;
            current.next.next = current;
            current.next = waiting.next !== null ? waiting.next : waiting;
            current = waiting;
        }
        if ()
        return newHead;
    }
};
