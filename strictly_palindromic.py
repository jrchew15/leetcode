class Solution:
    def basePalindromic(n, b):
        from math import log, floor
        k = floor(log(n, b))
        repr = [0]*(k+1)
        for i in range(k,0,-1):
            repr[i] = n // (b ** i)
            n %= b ** i
        repr[0] = n

        for i in range(0, (k+1)//2):
            if repr[i] != repr[k-i]:
                return False
        return True
    def isStrictlyPalindromic(n):
        for b in range(2, n-1):
            if not Solution.basePalindromic(n,b):
                return False
        return True


# print(Solution.basePalindromic(5,2))
# print(Solution.basePalindromic(7,5))
print(Solution.isStrictlyPalindromic(4))
