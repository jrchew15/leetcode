class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n-1:
            return -1
        parents = list(range(n))
        def findRoot(node):
            while parents[node] != node:
                parents[node] = parents[parents[node]]
                node = parents[node]
            return node
        def merge(connection):
            xRoot = findRoot(connection[0])
            yRoot = findRoot(connection[1])

            if xRoot == yRoot:
                return True
            parents[xRoot] = yRoot
            return False

        for connection in connections:
            if not merge(connection):
                n -= 1
        return n-1
