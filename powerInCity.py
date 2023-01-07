def getPowers(stations, r):
    power = list(stations)

    min = sum(stations[:r])
    power[0] = min
    idx = 0

    i = 1
    while i + r < len(stations):
        power[i] = power[i-1] + stations[i + r]
        if i - r > 0:
            power[i] -= stations[i - r - 1]
        if power[i] < min:
            min = power[i]
            idx = i

    for j in range(len(stations) - r, len(stations)):
        power[j] = power[j-1] - stations[j - r - 1]
        if power[j] < min:
            min = power[j]
            idx = j
    return [power, [min, idx]]

def maxPower(stations, r, k):
    # idea: find min, and check r width window including min with lowest total
        # increment until min is greater than lowest outside of window
    from math import ceil
    num_ints = ceil(len(stations) / r)

    maxToEvenOut -= (max - min) * num_ints

    tide = max((k - maxToEvenOut) // num_ints, 0)

    k -= tide * num_ints

    while k > 0:
        res = getPowers(stations, r)
        power = res[0]
        min = res[1][0]
        idx = res[1][1]
