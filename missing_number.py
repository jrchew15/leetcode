# Given an array nums containing n distinct numbers in the range [0, n],
# return the only number in the range that is missing from the array.

def missing_number(nums):
    # given array nums length n,
    # return missing number from 0 - n

    # brute force:
    # iterate i through 0 - n
    # check if i in nums O(n)
    # for i in range(0, len(nums)+1):
    #     if i not in nums: # O(n) operation
    #         return i
    # time O(n^2), space O(1)

    # convert nums to a set (time O(n), space O(n))
    # iterate through 0 - n until set doesn't have the number
    numSet = set(nums)
    for i in range(0, len(nums)+1):
        if i not in numSet: # O(1) lookup
            return i
    # time O(n), space O(n)

case1 = [9,6,4,2,3,5,8,0,1] # expected 7
case2 = [1,0,2] # expected 3

print(missing_number(case1))
print(missing_number(case2))
