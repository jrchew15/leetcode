# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
import heapq
class Solution:
    def mergeKLists(lists):
        heap = [(lists[idx].val, idx) for idx in range(len(lists))]
        heapq.heapify(heap)
        dummy = ListNode()
        tail = dummy

        while len(heap) > 0:
            tup = heap[0]
            tail.next = lists[tup[1]]
            tail = tail.next
            lists[tup[1]] = lists[tup[1]].next
            if lists[tup[1]]:
                heapq.heapreplace(heap, (lists[tup[1]].val, tup[1]))
            else:
                heapq.heappop(heap)
        return dummy.next

l1 = ListNode(2,ListNode(3, ListNode(5)))
l2 = ListNode(1,ListNode(2, ListNode(4)))
l3 = ListNode(1,ListNode(2, ListNode(5,ListNode(7,ListNode(8)))))

lMerged = Solution.mergeKLists([l1,l2,l3])

curr = lMerged
while curr:
    print(curr.val)
    curr = curr.next
