// at each iteration, find the index which gives farthest jump:
//      i + nums[i]
// then iterate from that index

function jump(nums) {
    if (nums.length === 1) return 0

    const dist = nums.map((num, i) => i + num)

    return helper()

    function helper(start = 0) {
        if (dist[start] >= dist.length - 1) return 1
        let max = -1;
        let next = 0;

        for (let i = start + 1; i < dist.length && i <= dist[start]; i++) {
            if (dist[i] > max) {
                max = dist[i]
                next = i
            }
        }
        return helper(next) + 1
    }
}

let nums1 = [2, 3, 1, 1, 4]
let nums2 = [2, 3, 0, 1, 4]
let nums3 = [2, 2, 2, 2, 2, 4, 2, 2]

console.log(jump(nums1))
console.log(jump(nums2))
console.log(jump(nums3))
