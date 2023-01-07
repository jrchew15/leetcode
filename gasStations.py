class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        # start at window of max net gas

        total = 0
        i = 0
        start = 0

        while i < len(gas):
            while i < len(gas) and gas[i] - cost[i] < 0:
                i += 1
            start = i
            total = 0
            while total >= 0 and i < len(gas):
                total += gas[i] - cost[i]
                i += 1
        if total < 0:
            return -1
        for j in range(start):
            total += gas[j] - cost[j]
            if total < 0:
                return -1
        return start

gas1 = [1,2,3,4,5]
cost1 = [3,4,5,1,2]
print(Solution.canCompleteCircuit(gas1, cost1))

gas2 = [4,5,1,2,3]
cost2 = [1,2,3,4,5]
print(Solution.canCompleteCircuit(gas2, cost2))

gas3 = [1,2,3,4,5]
cost3 = [4,5,4,1,2]
print(Solution.canCompleteCircuit(gas3, cost3))
