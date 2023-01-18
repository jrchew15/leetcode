class Solution:
    def kadane(self, sublist):
        maximum = float('-inf')
        prev_max = 0

        for num in sublist:
            prev_max = max(num, prev_max + num)
            if prev_max > maximum:
                maximum = prev_max
        return maximum
    def maxSubarraySumCircular(self, nums):
        min = 0
        leastNeg = float('-inf')
        i = 0
        j = len(nums) - 1
        if nums[0] <= 0 and nums[-1] <= 0:
            while i < len(nums) and nums[i] <= 0:
                min += nums[i]
                if nums[i] > leastNeg:
                    leastNeg = nums[i]
                i += 1
            if i == len(nums):
                return leastNeg
            while j > i and nums[j] <= 0:
                min += nums[j]
                j -= 1

        left = i
        right = i
        while i < len(nums):
            sum = 0
            l = i
            while i < len(nums) and nums[i] <= 0:
                sum += nums[i]
                i += 1
            if min > sum:
                min = sum
                left = l
                right = i
            i += 1
        return self.kadane([*nums[right:],*nums[:left]])
