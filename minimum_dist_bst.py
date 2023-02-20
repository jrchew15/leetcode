class Solution(object):
    def minDiffInBT(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """


        # stack to traverse
        # list to store values
        # binary search for insert position
        # then check distance to neighbors
        stack = []
        vals = [root.val]
        if root.left:
            stack.append(root.left)
        if root.right:
            stack.append(root.right)

        min_dist = 100000

        def binary_search_insert(val, vals):
            l = 0
            r = len(vals) - 1
            c = (l+r)//2
            while l < r+1:
                c = (l + r) // 2
                if vals[c] == val:
                    return 0
                elif vals[c] < val:
                    l = c+1
                else:
                    r = c-1
            vals.insert(c if vals[c] > val else c+1, val)
            return min(abs(vals[i-1] - vals[i] for i in (c,c+1) if i>0 and i < len(vals)))



        while len(stack) > 0:
            curr = stack.pop()
            dist = binary_search_insert(curr.val, vals)
            if dist == 0: return 0
            if dist < min_dist:
                min_dist = dist
            if curr.left: stack.append(curr.left)
            if curr.right: stack.append(curr.right)
        return min_dist
