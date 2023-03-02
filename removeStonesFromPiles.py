def maximumScore(self, a: int, b: int, c: int) -> int:
    piles = [a,b,c]
    piles.sort()

    if piles[2]-piles[1] < piles[0]:
        piles[1] = (piles[2]+piles[1]-piles[0]) // 2
    return piles[0] + piles[1]
