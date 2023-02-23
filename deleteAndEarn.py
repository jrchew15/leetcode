class Solution:
    def deleteAndEarn(nums) -> int:
        # store num: total in a dict
        # create list of keys
        # iterate through keys.
        # if key + 1 in dict, then sum evens and odds separately until
            # key++ not in dict
            # add max to sum
        # otherwise, add to sum
        from collections import defaultdict
        dct = defaultdict(lambda:0)
        for num in nums:
            dct[num] += num
        keys = list(dct.keys())
        keys.sort()
        total = 0

        print(keys, dct)

        i=0
        odds=0
        evens=0
        while i < len(keys):
            if keys[i]+1 not in dct:
                # print('prev',total)
                if odds == 0 and evens == 0:
                    total += dct[keys[i]]
                else:
                    if keys[i] % 2:
                        odds += dct[keys[i]]
                    else:
                        evens += dct[keys[i]]
                    total += max(odds,evens)
                    # print(odds,evens)
                    odds = 0
                    evens = 0
                # print(total)
                i += 1
            else:
                if keys[i] % 2:
                    odds += dct[keys[i]]
                else:
                    evens += dct[keys[i]]
                i += 1
        return total

inp = [10,8,4,2,1,3,4,8,2,9,10,4,8,5,9,1,5,1,6,8,1,1,6,7,8,9,1,7,6,8,4,5,4,1,5,9,8,6,10,6,4,3,8,4,10,8,8,10,6,4,4,4,9,6,9,10,7,1,5,3,4,4,8,1,1,2,1,4,1,1,4,9,4,7,1,5,1,10,3,5,10,3,10,2,1,10,4,1,1,4,1,2,10,9,7,10,1,2,7,5]

print(Solution.deleteAndEarn(inp))


def evensOdds(nums):
    evens = 0
    odds = 0
    for num in nums:
        if num % 2:
            odds += num
        else:
            evens += num
    return (evens, odds)

print('evens, odds', evensOdds(inp))
inp.sort()
print(inp)
