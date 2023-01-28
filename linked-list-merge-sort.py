# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def merge(h1, h2):
        dummy = ListNode()
        current = dummy
        while h1 and h2:
            if h1.val <= h2.val:
                current.next = h1
                h1 = h1.next
            else:
                current.next = h2
                h2 = h2.next
            current = current.next
        current.next = h1 or h2
        return dummy.next
    def sortList(head):
        if (not head or not head.next):
            return head
        mid = head
        tail = head
        odd = False

        while tail.next is not None:
            if odd:
                mid = mid.next
            tail = tail.next
            odd = not odd

        h2 = Solution.sortList(mid.next)
        mid.next = None
        head = Solution.sortList(head)
        return Solution.merge(head, h2)

head1 = ListNode(4,ListNode(2,ListNode(1,ListNode(3))))
current = Solution.sortList(head1)

while current:
    print(current.val)
    current = current.next
