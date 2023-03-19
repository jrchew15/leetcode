def distinctNames(ideas) -> int:
        dct = {}
        for idea in ideas:
            if idea[0] in dct:
                dct[idea[0]].add(idea[1:])
            else:
                dct[idea[0]] = set()
                dct[idea[0]].add(idea[1:])

        firsts = list(dct.keys())
        count = 0

        for i in range(len(firsts)):
            for j in range(i+1,len(firsts)):
                diff = len(dct[firsts[i]].intersection(dct[firsts[j]]))
                count += 2 * (len(dct[firsts[i]])-diff) * (len(dct[firsts[j]])-diff)
        return count

