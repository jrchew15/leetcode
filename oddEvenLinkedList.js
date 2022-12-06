var oddEvenList = function (head) {
    const oddCurrent = head;
    const evenHead = head.next;
    const evenCurrent = evenHead;

    while (oddCurrent.next && evenCurrent) {
        oddCurrent.next = evenCurrent.next
        evenCurrent.next = oddCurrent.next
        oddCurrent = oddCurrent.next
        evenCurrent = evenCurrent.next


    }
    oddCurrent.next = evenHead;
    return head
};
