class Solution:
    def findSubsequences(nums):
        startsWith = [[] for num in nums]

        for i in range(len(nums) - 2,-1,-1):
            for j in range(i+1,len(nums)):
                if nums[j] >= nums[i]:
                    startsWith[i].append((nums[i], nums[j]))
                    startsWith[i].extend([(nums[i],*subseq) for subseq in startsWith[j]])
        mySet = set()
        for subseqs in startsWith:
            mySet.update(set(subseqs))
        return [list(subseq) for subseq in mySet]

print(Solution.findSubsequences([4,6,7,7,7]))
