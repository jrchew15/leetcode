def findAnagrams(s, p):
    from collections import Counter

    pCount = Counter(p)
    sCount = Counter(s[0:len(p)-1])

    results = []
    for i in range(0, len(s) - len(p)+1):
        char = s[i+len(p)-1]
        sCount[char] = 1 if char not in sCount else sCount[char]+1
        print(s[i:i+len(p)], sCount, pCount)
        if sCount == pCount:
            results.append(i)
        sCount[s[i]] -= 1
        if sCount[s[i]] == 0:
            del sCount[s[i]]
    return results

print(findAnagrams("cbaebabacd",'abc'))
print(findAnagrams("cbaebabacd",'ab'))
print(findAnagrams("abab",'ab'))
