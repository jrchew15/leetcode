

def decodeString (s, endBrackets=[]):
    print(s,endBrackets)
    ans = ''
    i=0
    while i < len(s):
        if s[i].isalpha():
            ans += s[i]
            i += 1
        elif s[i].isdigit():
            stringint = ''
            while s[i].isdigit():
                stringint += s[i]
                i += 1
            if len(endBrackets) == 0:
                count = 1
                j = i + 1
                while count > 0:
                    if s[j] == '[':
                        count += 1
                    if s[j] == ']':
                        count -= 1
                        endBrackets.append(j)
                    j += 1
            j = endBrackets.pop()
            ans += decodeString(s[i+1:j],[x-i-1 for x in endBrackets])*int(stringint)
            i = j+1
        else:
            return f'SOMETHING BAD {ans}'
    return ans

print(decodeString("3[a2[c]]"))
print(decodeString("2[abc]3[cd]ef"))
