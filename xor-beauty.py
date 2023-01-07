class Solution:
    def xorBeauty(nums) -> int:
        acc = 0
        for num in nums:
            acc = acc ^ num
        return acc

print(Solution.xorBeauty([15,45,20,2,34,35,5,44,32,30]))
