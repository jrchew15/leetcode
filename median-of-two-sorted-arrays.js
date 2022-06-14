var findMedianSortedArrays = function (nums1, nums2) {

    let merged = merge(nums1, nums2);
    if (merged.length % 2) {
        return merged[(merged.length - 1) / 2]
    } else {
        return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2
    }

};
function merge(arr1, arr2) {
    let mergedArr = [];
    let l = 0;
    let r = 0;
    while (l < arr1.length || r < arr2.length) {
        if (arr1[l] <= arr2[r]) {
            mergedArr.push(arr1[l]);
            l++;
        } else if (arr2[r] < arr1[l]) {
            mergedArr.push(arr2[r]);
            r++;
        } else {
            mergedArr = mergedArr.concat(arr1[l] !== undefined ? arr1.slice(l) : arr2.slice(r));
            break;
        }
    }
    return mergedArr;
}

let nums1 = [1, 4];
let nums2 = [2, 3];
let nums3 = [0, 17, 18, 19];
let nums4 = [-3, 0, 17, 18, 19];

console.log(merge(nums1, nums2), findMedianSortedArrays(nums1, nums2))
console.log(merge(nums1, nums3), findMedianSortedArrays(nums1, nums3))
console.log(merge(nums1, nums4), findMedianSortedArrays(nums1, nums4))
