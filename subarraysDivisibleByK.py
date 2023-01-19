class Solution:
    def subarraysDivByK(self, nums, k):
        count = {0:1}

        subsum = 0
        total = 0

        for num in nums:
            subsum += num
            mod = subsum % k
            if mod in count:
                total += count[mod]
                count[mod] += 1
            else:
                count[mod] = 1
        return total
