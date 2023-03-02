var numberOfArithmeticSlices = function (nums) {
    let memo = { 3: 1, 4: 3 };
    let count = 0;
    let i = 0;
    let diff = nums[1] - nums[0];
    for (let j = 1; j < nums.length + 1; j++) {
        if (nums[j] - nums[j - 1] === diff) continue
        if (j - i >= 3) count += numSubintervals(j - i, memo)
        i = j - 1
        diff = nums[j] - nums[i]
    }
    return count
};

function numSubintervals(len, memo) {
    if (!memo[len]) memo[len] = numSubintervals(len - 1, memo) + len - 2
    return memo[len]
}
