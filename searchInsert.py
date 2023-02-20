class Solution:
    def searchInsert(nums, target):
        l = 0
        r = len(nums)-1
        c = 0
        while l < r:
            c = (l+r)//2
            if nums[c]==target:
                return c
            elif nums[c] < target:
                l = c+1
            else:
                r = c-1
        return l if nums[l] >= target else l + 1
