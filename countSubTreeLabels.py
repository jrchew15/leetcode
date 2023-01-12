class Solution:
    def edgesToParentsLeaves(n,edges):
        parents = [None]*n
        hasParent = set()
        hasParent.add(0)
        i = 0
        leaves = set(range(0,n))
        edgeIndices = set(range(0,n))
        while len(hasParent) < n:
            if edges[i][0] in hasParent:
                leaves.discard(edges[i][0])
                parents[edges[i][1]] = edges[i][0]
                hasParent.add(edges[i][1])
                edgeIndices.remove(i)
            elif edges[i][1] in hasParent:
                leaves.discard(edges[i][1])
                parents[edges[i][0]] = edges[i][1]
                hasParent.add(edges[i][0])
                edgeIndices.remove(i)
            i = list(edgeIndices)[1]
        return parents, leaves
    def edgesToParentsLeavesAdj(n,edges):
        adj = {}
        for i in range(n):
            adj[i] = set()
        for edge in edges:
            adj[edge[0]].add(edge[1])
            adj[edge[1]].add(edge[0])
        q = [(0,None)]
        visited = set()
        parents = [None] * n
        while len(q) > 0:
            num, parent = q.pop()
            parents[num] = parent
            if num not in visited:
                visited.add(num)
                q.extend([(child,num) for child in adj[num] if child not in visited])
        return parents, set([ key for key in adj if len(adj[key]) == 1])

    def countSubTrees(n, edges, labels):
        from datetime import datetime, timedelta
        start = datetime.now()
        # find parents of all nodes (?)
        # iterate through unvisited, going up to root
        #   keep track of label counts until you hit a visited,
        #   then add counts to already visited
        parents, leaves = Solution.edgesToParentsLeavesAdj(n, edges)
        afterParents = datetime.now()
        print('parents time:', afterParents - start)
        ans = [1]*n


        unvisited = set(range(1,n))
        while len(unvisited) > 0:
            counts = {}
            current = leaves.pop()

            while current in unvisited:
                counts[labels[current]] = counts[labels[current]] + 1 if labels[current] in counts else 1
                ans[current] = counts[labels[current]]
                unvisited.remove(current)
                current = parents[current]
            while current is not None:
                if labels[current] in counts:
                    ans[current] += counts[labels[current]]
                current = parents[current]
        print('end:', datetime.now() - afterParents)
        return ans

print(Solution.countSubTrees(n=7, edges=[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels="abaedcd"))
print(Solution.countSubTrees(n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb"))
print(Solution.countSubTrees(n=5, edges=[[0,1],[0,2],[1,3],[0,4]], labels="aabab"))
