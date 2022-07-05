// function candy(ratings) {
//     let n = ratings.length;
//     let candies = new Array(n).fill(1);
//     let updated = true;
//     while (updated) {
//         _increment();
//     }

//     function _increment() {
//         updated = false;
//         for (let i = 0; i < n; i++) {
//             if (ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
//                 updated = true;
//                 candies[i] = candies[i - 1] + 1;
//             }
//             if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
//                 updated = true;
//                 candies[i] = candies[i + 1] + 1;
//             }
//         }
//     }
//     return candies.reduce((acc, ele) => acc + ele);
// }

function candy(ratings) {
    let n = ratings.length;
    let candies = new Array(n);
    let queue = [];
    if (ratings[0] <= ratings[1]) { queue.push(0) }
    if (ratings[n - 1] <= ratings[n - 2]) { queue.push(n - 1) }
    for (let i = 1; i < n - 1; i++) {
        if (ratings[i - 1] >= ratings[i] && ratings[i + 1] >= ratings[i]) {
            queue.push(i);
        } else if (ratings[i - 1] <= ratings[i] && ratings[i + 1] <= ratings[i]) {
            candies[i] = '?';
        }
    }
    let num = 1;
    while (queue.length) {
        let lv = queue.length;
        for (let k = 0; k < lv; k++) {
            let i = queue.shift();
            candies[i] = num;
            if (i > 0) {
                if (!candies[i - 1] && ratings[i - 1] > ratings[i]) {
                    queue.push(i - 1);
                }
            }
            if (i < n - 1) {
                if (!candies[i + 1] && ratings[i + 1] > ratings[i]) {
                    queue.push(i + 1);
                }
            }
        }
        num++;
    }
    // console.log(candies)
    for (let i = 0; i < n - 1; i++) {
        if (candies[i] === '?') {
            if (candies[i + 1] === '?') {
                candies[i] = candies[i - 1] + 1;
                candies[i + 1] = candies[i + 2] + 1;
                continue
            }
            candies[i] = Math.max(candies[i - 1], candies[i + 1]) + 1;
        }
    }
    // console.log(candies)
    return candies.reduce((a, b) => a + b);
}

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 2, 3, 2, 2, 2, 4, 4, 1, 2])); //16
console.log(candy([1, 3, 4, 5, 2])); //11
