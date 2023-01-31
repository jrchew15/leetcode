class Solution:
    def bestTeamScore(self, scores, ages) -> int:
        players = list(zip(ages,scores))
        players.sort(key = lambda player: player)

        dp = [player[1] for player in players]

        # dp[i] stores the max score including player i and all possible players prior
        for i in range(len(scores)):
            for j in range(i):
                if players[i][1] >= players[j][1]:
                    dp[i] = max(dp[i], players[i][1] + dp[j])
        return max(dp)


print(Solution.bestTeamScore(Solution,[1,3,5,10,15],[1,2,3,4,5]))
print(Solution.bestTeamScore(Solution,[457,787,911,326,727,449,385,947,250,245,694,347,633,709,45,157,100,352,368,105,374,450,435,105,976,853,628,597,148,687,974,239,352,774,883,539,8,675,939,294,319,438,573,748,819,107,333,813,717,531,994,128,30,44,312,794,242,988,394,365,192,395,824,272,628,198,677,132,502,325,739,445,492,836,264,527,47],
[66,25,9,33,84,21,58,97,70,25,32,34,83,50,90,5,68,99,41,9,48,24,54,75,70,99,12,48,81,100,60,38,84,41,92,62,70,90,25,58,60,10,47,33,75,42,88,27,77,75,52,85,78,35,16,100,32,97,53,69,97,89,82,63,20,65,83,80,86,74,43,81,33,96,19,45,4]))
