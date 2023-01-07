class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        heavy = any([x >= 1e4 for x in (length, width, height)])
        if not heavy:
            heavy = length * width * height >= 1e9
        return "Heavy" if heavy and mass < 100 else ("Both" if heavy else "Neither")
