land = [
    [1,0,0,0,0,1,0,0,0,1],
    [1,1,0,1,1,1,0,1,1,0],
    [0,1,1,0,1,0,0,1,0,0],
    [1,0,1,0,1,0,0,0,0,0],
    [0,1,0,0,0,1,1,0,1,1],
    [0,0,1,0,0,1,0,1,0,1],
    [0,0,0,1,1,1,1,0,0,1],
    [0,1,0,0,1,0,0,1,0,0],
    [0,0,0,0,0,1,1,1,0,0],
    [1,1,0,1,1,1,1,1,0,0]
    ]

def maxDistance(grid) -> int:
    from collections import deque
    visited=set()
    def neighbors(tup):
        res = []
        if tup[0] > 0:
            res.append((tup[0]-1,tup[1]))
        if tup[0] < len(grid)-1:
            res.append((tup[0]+1,tup[1]))
        if tup[1] > 0:
            res.append((tup[0],tup[1]-1))
        if tup[1] < len(grid[0])-1:
            res.append((tup[0],tup[1]+1))
        return [tupl for tupl in res if tupl not in visited]
    queue = deque()
    none = True
    for row in range(len(grid)):
        for col in range(len(grid[row])):
            if grid[row][col]:
                # visited.add((row,col))
                queue.append((row,col))
            else:
                none = False
    if (len(queue) == 0 or none): return -1

    depth = 0
    while any(tup not in visited for tup in queue):
        # print(depth, queue)
        width = len(queue)
        for i in range(width):
            curr = queue.popleft()
            if curr not in visited:
                visited.add(curr)
                queue.extend(neighbors(curr))
        depth += 1
    return depth

print(maxDistance(land))
