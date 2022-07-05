function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    let numSet = new Set();
    numSet.add(nums[nums.length - 1]);
    for (let i = nums.length - 2; i >= 0; i--) {
        let count = 0;
        for (let num of numSet) {
            if (num < nums[i]) {
                count++;
            }
        }
        numSet.add(nums[i]);
        counts[i] = count;
    }
    return counts;
}

let nums = [5, 2, 6, 1];
console.log(countSmaller(nums))
console.log(countSmaller([-1]))
console.log(countSmaller([-1, -1]))

let longNums = [26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36, 100, 41];
console.log(longNums, countSmaller(longNums), [10, 27, 10, 35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14, 6, 12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0, 0, 4, 3, 2, 0, 1, 0])
