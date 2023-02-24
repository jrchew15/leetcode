class Heap:
    def __init__(self, it, key=lambda x,y: x <= y, profits=None):
        self.comparitor = key
        self.lst = []
        print('building tree')
        from math import floor, log2
        for el in it:
            self.push(el)
            if profits is not None:
                res = []
                for i in range(0,floor(log2(len(self.lst)))+1):
                    res.append(' '.join(str(profits[self.lst[j]]) for j in range(2**i-1,min(2**(i+1)-1,len(self.lst)))))
                print('inserting',profits[el],'\n','\n'.join(res))
    def push(self, el):
        # find insert position
        i = len(self.lst)
        self.lst.append(el)
            # if it comes before parent, then swap parent down
        while i > 0 and self.comparitor(el, self.lst[(i-1)//2]):
            self.lst[i] = self.lst[(i-1)//2]
            i = (i-1)//2
        self.lst[i] = el
    def poll(self, pos=0):
        last = self.lst.pop()
        if len(self.lst) == pos: return last
        first = self.lst[pos]
        i = pos
        # while ith has children, move 'better' child up
        while 2*i+1 < len(self.lst):
            if len(self.lst) > 2*i+1 and self.comparitor(last,self.lst[2*i+1]):
                if len(self.lst) == 2*i+2 or self.comparitor(last,self.lst[2*i+2]):
                    break
            if len(self.lst) > 2*i + 2 and self.comparitor(self.lst[2*i+2],self.lst[2*i+1]):
                self.lst[i] = self.lst[2*i+2]
                i = 2*i + 2
            else:
                self.lst[i] = self.lst[2*i+1]
                i = 2*i + 1
        # once ith has no children, replace it with last
        self.lst[i] = last
        return first
    def search_and_pop(self, condition):
        for i in range(len(self.lst)):
            if condition(self.lst[i]):
                return self.poll(pos=i)
        return None
    def __repr__(self) -> str:
        from math import floor, log2
        res = []
        for i in range(0,floor(log2(len(self.lst)))+1):
            res.append(' '.join(str(self.lst[j]) for j in range(2**i-1,min(2**(i+1)-1,len(self.lst)))))
        return '\n'.join(res)
def findMaximizedCapital(k, w, profits, capital):
    """
    :type k: int
    :type w: int
    :type profits: List[int]
    :type capital: List[int]
    :rtype: int
    """
    def comparitor(i,j):
        if profits[i] == profits[j]:
            return capital[i] <= capital[j]
        return profits[i] > profits[j]

    my_capital = w

    heap = Heap(range(len(profits)), key=comparitor)
    # print('capital_heap','\n','\n'.join(' '.join(str(capital[int(num)]) for num in str(line).split(' ')) for line in str(heap).split('\n')))
    def findAndBuyNext(heap, my_capital):
        # traverse heap.lst, stop checking branch if smaller profit than max
        # update max if within capital
        q = [0]
        profit = 0
        idx = 0
        while len(q) > 0:
            heapIdx = q.pop()
            if capital[heap.lst[heapIdx]] <= my_capital and profit < profits[heap.lst[heapIdx]]:
                profit = profits[heap.lst[heapIdx]]
                idx = heapIdx
                continue
            if profit < profits[heap.lst[heapIdx]]:
                if len(heap.lst) > 2*heapIdx + 1: q.append(2*heapIdx + 1)
                if len(heap.lst) > 2*heapIdx + 2: q.append(2*heapIdx + 2)
        heap.poll(pos=idx)
        return profit

    for i in range(k):
        profit = findAndBuyNext(heap, my_capital)
        if profit == 0: break
        my_capital += profit
    # print('cap:',my_capital)
    # print('profit_heap','\n','\n'.join(' '.join(str(profits[int(num)]) for num in str(line).split(' ')) for line in str(heap).split('\n')))
    # print('capital_heap','\n','\n'.join(' '.join(str(capital[int(num)]) for num in str(line).split(' ')) for line in str(heap).split('\n')))

    return my_capital


# k=3
# w=0
# profits = [1,2,3]
# capital = [0,1,2]
k = 2
w = 0
profits = [1,2,3]
capital = [0,1,1]
# print(findMaximizedCapital(k,w,profits,capital))

big_k=40
big_w=8
big_profits=[75,486,155,104,72,136,174,194,368,121,258,445,160,383,73,18,437,308,509,482,227,469,104,416,257,97,88,82,181,169,463,56,182,249,467,140,328,291,115,339,511,73,53,373,220,261,236,296,284,431,178,94,520,196,150,172,26,487,96,285,433,404,204,130,313,374,89,140,401,261,76,370,126,230,73,509,377,446,480,504,61,82,504,85,241,17,84,412,18,174,469,10,449,114,215,340,414,82,401,61]
big_capital=[249,266,110,94,292,45,290,430,273,481,142,81,52,20,323,0,245,390,455,477,170,244,34,446,264,287,341,24,204,59,199,468,74,387,470,9,137,127,51,359,83,379,82,19,157,325,17,165,304,376,202,144,282,0,379,304,510,370,507,195,127,422,127,186,494,429,303,132,33,250,153,310,216,29,307,0,38,67,471,337,521,118,314,355,312,247,142,50,372,499,243,519,460,6,233,444,116,330,426,78]
print(findMaximizedCapital(big_k,big_w,big_profits,big_capital))
print(findMaximizedCapital(big_k+1,big_w,big_profits,big_capital))

def findMaximizedCapital2(k,w,profits,capital):
    pairs = list(zip(capital,profits))
    pairs.sort()

    profit_heap = Heap([],key= lambda x,y: x > y)
    idx = 0
    cap = w
    for i in range(0,min(len(profits),k)):
        while idx < len(profits) and pairs[idx][0] <= cap:
            profit_heap.push(pairs[idx][1])
            idx += 1
        cap += profit_heap.poll()
    return cap

print(findMaximizedCapital2(big_k,big_w,big_profits,big_capital))
print(findMaximizedCapital2(big_k+1,big_w,big_profits,big_capital))
