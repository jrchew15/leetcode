function threeSum(nums) {
    // two sum on indices 2 onward?
    //  For each index >= 2 we have a target sum
    //  find all pairs with indices less than current index
    // Or iterate backward through array
    //

    nums.sort((a, b) => a - b);

    let negatives = [];
    let positives = [];
    let results = new Set();

    nums.forEach((num) => {
        if (num < 0) negatives.push(num)
        if (num > 0) positives.push(num)
    });

    let zeroCount = nums.length - negatives.length - positives.length;

    if (zeroCount) {
        negatives.push(0);
        positives.unshift(0);
        if (zeroCount > 2) results.add('0,0,0')
    }

    for (let num of negatives) {
        twoSumSet(positives, -num).forEach(result => {
            results.add(`${num},${result},${-num - result}`)
        })
    }
    for (let num of positives) {
        twoSumSet(negatives, -num).forEach(result => {
            results.add(`${result},${-num - result},${num}`)
        })
    }
    let x = [];
    for (let str of results.keys()) {
        x.push(JSON.parse(`[${str}]`))
    }

    return x
}

function twoSumSet(nums, target) {
    let set = new Set();
    let results = new Set();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (set.has(target - num)) {
            results.add(target - num)
        }
        set.add(num);
    }
    return results
}
