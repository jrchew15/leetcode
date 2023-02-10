class Solution:
    def simplifyPath(self, path: str) -> str:
        paths = []
        for dir in path.split('/'):
            if dir == '' or dir == '.':
                continue
            if dir == '..':
                if len(paths) > 0: paths.pop()
                continue
            paths.append(dir)
        return '/'+'/'.join(paths)
