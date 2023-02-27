class Solution(object):
    def maxSlidingWindow(nums, k):
        # heap associated with window
        # to delete, use counter for 'to be popped' ?
        # on leaving window, add to counter
        # while loop peek heap and check against counter,
            # pop from heap and decrement counter
        import heapq
        from collections import defaultdict
        heap = [-nums[i] for i in range(k-1)]
        heapq.heapify(heap)
        res = [0]*(len(nums)-k+1)
        count = defaultdict(lambda: 0)

        print(res,heap)
        for i in range(len(res)):
            # progress right of window
            heapq.heappush(heap,-nums[i+k-1])
            # save max
            res[i] = -heap[0]

            # save left to be popped
            count[nums[i]] += 1

            # pop from heap until top remains in count
            while len(heap) > 0 and count[-heap[0]] > 0:
                count[-heap[0]] -= 1
                heapq.heappop(heap)
        return res

nums=[1,3,-1,-3,5,3,6,7]
# print('result', Solution.maxSlidingWindow(nums,3))
print('result', Solution.maxSlidingWindow([1],1))
