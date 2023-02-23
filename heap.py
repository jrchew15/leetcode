class Heap:
    def __init__(self, it, key=lambda x,y: x <= y):
        self.comparitor = key
        self.lst = []
        for el in it:
            self.push(el)
    def push(self, el):
        # find insert position
        i = len(self.lst)
        self.lst.append(el)
            # if it comes before parent, then swap parent down
        while i > 0 and self.comparitor(el, self.lst[(i-1)//2]):
            self.lst[i] = self.lst[(i-1)//2]
            i = (i-1)//2
        self.lst[i] = el
    def poll(self):
        last = self.lst.pop()
        first = self.lst[0]
        i = 0
        # while ith has children, move 'better' child up
        while 2*i+1 < len(self.lst):
            if len(self.lst) > 2*i + 2 and self.comparitor(self.lst[2*i+2],self.lst[2*i+1]):
                self.lst[i] = self.lst[2*i+2]
                i = 2*i + 2
            else:
                self.lst[i] = self.lst[2*i+1]
                i = 2*i + 1
        # once ith has no children, replace it with last
        self.lst[i] = last
        return first
    def visualize(self,msg):
        from math import floor, log2
        print(msg)
        for i in range(0,floor(log2(len(self.lst)))+1):
            print(*(self.lst[j] for j in range(2**i-1,min(2**(i+1)-1,len(self.lst)))))
    def __repr__(self) -> str:
        from math import floor, log2
        res = []
        for i in range(0,floor(log2(len(self.lst)))+1):
            res.append(' '.join(str(self.lst[j]) for j in range(2**i-1,min(2**(i+1)-1,len(self.lst)))))
        return '\n'.join(res)


x = [5,7,1,3,4,1,6,3,9]
xHeap = Heap(x)

# xHeap.visualize('x')
yHeap = Heap(x,key=lambda m,n: m >= n)
# yHeap.visualize('y')


xHeap.push(10)
xHeap.push(4)
xHeap.push(4)
# xHeap.visualize('x')
print(xHeap)
print(yHeap)
