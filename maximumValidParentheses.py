
def longestValidParentheses(s: str) -> int:
    if s == '': return 0
    left = 0
    maxLength = 0
    stack = 0
    for i in range(len(s)):
        if s[i] == '(':
            stack += 1
            continue
        else:
            if stack == 0:
                length = i - left
                if length > maxLength:
                    maxLength = length
                left = i+1
                continue
            stack-=1
    if stack == 0:
        return max(maxLength, len(s)-left)

    right = len(s)-1
    stack = 0
    for i in range(len(s)-1,-1,-1):
        if s[i] == ')':
            stack += 1
            continue
        else:
            if stack == 0:
                length = right - i
                if length > maxLength:
                    maxLength = length
                right = i
                continue
            stack -= 1
    return max(right, maxLength)

case1 = "(())("     #4
case2 = "())(()"    #2
case3 = "("         #0
case4 = ")"         #0
case5 = "(()))"     #4

print(longestValidParentheses(case1))
print(longestValidParentheses(case2))
print(longestValidParentheses(case3))
print(longestValidParentheses(case4))
print(longestValidParentheses(case5))
