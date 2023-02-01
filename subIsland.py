class Solution:
    def countSubIslands(grid1, grid2) -> int:
        #dfs on grid2 when finding a 1.
        #if a 1 on grid2 is 0 on grid1, break and don't add to count
        visited = set()
        m = len(grid2)
        n = len(grid2[0])
        def neighbors(i,j):
            neighbs = []
            if m - 1 > i and grid2[i+1][j] == 1:
                neighbs.append((i+1,j))
            if i > 0 and grid2[i-1][j] == 1:
                neighbs.append((i-1,j))
            if j < n - 1 and grid2[i][j+1] == 1:
                neighbs.append((i,j+1))
            if j > 0 and grid2[i][j-1] == 1:
                neighbs.append((i,j-1))
            return neighbs

        def isSubIsland(i,j):
            res = True
            stack = [(i,j)]
            while stack:
                coords = stack.pop()
                if coords not in visited:
                    visited.add(coords)
                    stack.extend(neighbors(*coords))
                    if grid1[coords[0]][coords[1]] == 0:
                        res = False
            return res

        count = 0

        for i in range(m):
            for j in range(n):
                if grid2[i][j] == 0:
                    continue
                if (i,j) not in visited and isSubIsland(i,j):
                    print(i,j)
                    count += 1
        return count
grid1=[[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]]
grid2=[[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
print(Solution.countSubIslands(grid1,grid2))
