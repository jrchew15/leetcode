var longestConsecutive = function (nums) {
    let numsSet = new Set(nums);
    let visited = new Set();
    let seqs = {};
    let max = 0;
    numsSet.forEach((num) => {
        if (visited.has(num)) return;
        seqs[num] = 0;
        let ele = num;
        while (numsSet.has(ele)) {
            if (visited.has(ele)) {
                seqs[num] += seqs[ele];
                ele += seqs[ele];
            } else {
                visited.add(ele);
                seqs[num]++;
                ele++;
            }
        }
        if (max < seqs[num]) { max = seqs[num] }
    })
    return max;
};

console.log(longestConsecutive([-1, 0, 1]))
console.log(longestConsecutive([1,0,-1,-3,-2,-4]))
