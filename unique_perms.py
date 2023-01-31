class Solution:
    def permuteUnique(nums):
        def tupleHelper(nums):
            if len(nums) <= 1:
                return set(nums)
            perms = set()
            num = nums.pop()

            for perm in tupleHelper(nums):
                for i in range(len(perm)+1):
                    perms.add((*perm[:i], num, *perm[i:]))

            return perms
        return [list(perm) for perm in tupleHelper(nums)]
