var sortArray = function (nums) {
    // quicksort: choose left as pivot,
    // move every lesser element to the left
    // i is 'to be overwitten', will eventually be pivot
    // i+1 is 'to be swapped',
    // if k is greater than i+1 and nums[k] is smaller than pivot
    // then k -> i, i+1-> k, i++
    // j is end of interval
    // then run sortArray on two halves around pivot
    function _helper(nums, i, j) {
        if (j - i <= 1) return

        let start = i
        let pivot = nums[i]
        for (let k = i + 1; k < j; k++) {
            if (nums[k] < pivot) {
                nums[i] = nums[k]
                i++
                nums[k] = nums[i]
            }
        }
        nums[i] = pivot

        _helper(nums, start, i)
        _helper(nums, i + 1, j)
    }
    _helper(nums, 0, nums.length)
    return nums
};
