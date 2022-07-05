
// function quicksort(arr) {
//     if (arr.length <= 1) { return arr };

//     let pivot = arr[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) { left.push(arr[i]) }
//         else { right.push(arr[i]) }
//     }

//     return [...quicksort(left), pivot, ...quicksort(right)];
// }

function replaceKthUnfilled(k, array, ele) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            if (count === k) {
                array[i] = ele;
                return
            }
            count++;
        }
    }
    return -1;
}

function reconstructQueue(people) {
    let n = people.length;
    let sorted = people.sort((a, b) => a[0] > b[0] ? 1 : (a[0] === b[0] ? b[1] - a[1] : -1));
    let queue = new Array(n).fill(null);
    for (let i = 0; i < n; i++) {
        replaceKthUnfilled(sorted[i][1], queue, sorted[i]);
    }

    return queue;
};

let people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(people))

let people2 = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]];
console.log(reconstructQueue(people2))
