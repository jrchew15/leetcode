def my_sqrt(x)
    if x >= 2147395600
        return 46340
    end
    return (Math.exp(0.5 * Math.log(x))).floor
end

def binary_search_sqrt(x)
    return (0..x.succ).bsearch { _1 * _1 > x}.pred
end
