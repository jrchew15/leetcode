# Recursion: base is one string empty, return 0
#   store max substr length
#   iterate through str1, call recursive function on remainder of string

def longestCommonSubsequence(text1, text2, inters=None) -> int:
    if inters is None:
        inters = set.intersection(set(text1),set(text2))
    if len(text1) * len(text2) == 0:
        return 0
    max = 0
    for i in range(len(text1)):
        char = text1[i]
        if char in inters:
            for j in range(len(text2)):
                if text2[j] == char:
                    count = 1 + longestCommonSubsequence(text1[i+1:],text2[j+1:],inters)
                    if count > max:
                        max = count
                if max >= len(text2) - j:
                    break
                if max >= len(text1) - i:
                    break
        if max >= len(text1) - i:
            break
    return max


print(longestCommonSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))

def deleteMethod(text1,text2):
    inters = set.intersection(set(text1),set(text2))
    short1 = ''
    short2 = ''
    for char in text1:
        if char in inters:
            short1 += char
    for char in text2:
        if char in inters:
            short2 += char


    def pointers(str1, str2):
        if len(str1) == 0 or len(str2) == 0:
            return 0
        if str1 == str2:
            return len(str1)

        max = 0

        for i in range(len(str1)):
            char = str1[i]
            for j in range(len(str2)):
                if str2[j] == char:
                    


    # recursive on intersection strings
    # delete one character at a time? base case strings are the same
    #   if char1 is char2, increment both pointers
    #       else increment char2
    #   at the end of text2, increment char1?
