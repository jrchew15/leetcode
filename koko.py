from collections import defaultdict, Counter
import math
def minEatingSpeed(piles, h):
    """
    :type piles: List[int]
    :type h: int
    :rtype: int
    """
    low = 1
    high = max(piles)
    counts = Counter(piles)

    def time_taken(speed):
        return sum(math.ceil(pile/speed)*counts[pile] for pile in counts)

    while low < high:
        mid = (low+high)//2
        if time_taken(mid) > h:
            low = mid+1
        else:
            high = mid
    return low

print(minEatingSpeed([30,11,23,4,20],5))
print(minEatingSpeed([30,11,23,4,20],6))
print(minEatingSpeed([312884470],968709470))
