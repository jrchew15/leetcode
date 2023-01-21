class Solution:
    def restoreIpAddresses(s, k=4):
        if k <= 0 or len(s) < k or len(s) > k * 3:
            return []
        if k == 1:
            return [s]

        if s[0] == '0':
            return ['0.'+address for address in Solution.restoreIpAddresses(s[1:], k=k-1)]

        addresses = []

        for i in range(1,4):
            if int(s[:i]) > 255:
                continue
            ithAddresses = Solution.restoreIpAddresses(s[i:], k=k-1)
            if ithAddresses:
                addresses.extend([f'{s[:i]}.{address}' for address in ithAddresses])
        return addresses

print(Solution.restoreIpAddresses("25525511135"))
print(Solution.restoreIpAddresses("0000"))
