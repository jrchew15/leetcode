function threeSumClosest(nums, target) {

    nums.sort( (a,b) => a-b );

    let min = Infinity;
    let sum;
    for (let i=0; i < nums.length - 2; i++) {
        for (let j=i+1; j < nums.length - 1; j++) {
            let k = pairToClosest(i,j);
            console.log(nums, i,j,k)
            let dist = Math.abs(target - nums[i] - nums[j] - nums[k]);
            if (dist < min) {
                min = dist;
                sum = nums[i] + nums[j] + nums[k];
            }
        }
    }
    return sum;

    function pairToClosest(i,j) {
        let l = j+1;
        let r = nums.length-1;

        if (nums[i] + nums[j] + nums[l] > target) return l
        if (nums[i] + nums[j] + nums[r] < target) return r

        let middle = Math.floor((l+r)/2);

        while (l < r-1) {
            middle = Math.floor((l+r)/2);

            if (nums[middle] < target - nums[i] - nums[j]) {
                l = middle + 1;
                continue;
            }
            if (nums[middle] > target - nums[i] - nums[j]) {
                r = middle -1;
                continue;
            }
        }

        if (l === r) {
            l < middle ? r = middle : l = middle;
        }

        return (nums[l]+nums[r])/2 > target - nums[i] - nums[j] ? r : l
    }
}
