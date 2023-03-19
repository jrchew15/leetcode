x = open('day3.txt','r')
lst = x.read().split('\n')
lst.pop()
print(len(lst))

chars = []
# ct = 0
for i in range(0,len(lst),3):
    # ct += 1
    # print(ct)
    set1 = set(lst[i])
    set2 = set(lst[i+1])
    set3 = set(lst[i+2])
    char = set1.intersection(set2.intersection(set3))
    chars.append(char.pop())
print(chars, len(chars))

def priority(char):
    return ord(char) - 96 if char.islower() else ord(char) - 38

print(sum([priority(char) for char in chars]))
