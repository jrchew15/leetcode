def groupAnagrams(strs):
    dct = {}

    for string in strs:
        chars=list(string)
        chars.sort()
        key = ''.join(chars)
        if key in dct:
            dct[key].append(string)
        else:
            dct[key] = [string]
    return list(dct.values())

strs1 = ["eat","tea","tan","ate","nat","bat"]
print(groupAnagrams(strs1))
