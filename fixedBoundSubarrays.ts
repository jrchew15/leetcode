function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let left: number = 0;
    let right: number = 0;
    let minPos: number = -1;
    let maxPos: number = -1;
    let count: number = 0;

    while (right < nums.length) {
        if (minK > nums[right] || maxK < nums[right]) {
            minPos = right;
            maxPos = right;
            right++;
            left = right;
            continue
        }
        if (nums[right] === minK) {
            minPos = right;
        }
        if (nums[right] === maxK) {
            maxPos = right;
        }
        count += Math.min(minPos, maxPos) - left + 1;
        right++;
    }
    return count;
};
