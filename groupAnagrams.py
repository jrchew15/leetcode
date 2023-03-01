def groupAnagrams(strs):
    from collections import defaultdict
    dct = defaultdict(lambda: [])

    for string in strs:
        chars=list(string)
        chars.sort()
        key = ''.join(chars)
        dct[key].append(string)
    return list(dct.values())

strs1 = ["eat","tea","tan","ate","nat","bat"]
print(groupAnagrams(strs1))
