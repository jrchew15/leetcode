// var generateParenthesis = function(n) {
//     let elements = new Set(["()"])
//     for (let i = 1; i < n; i++) {
//         let arr = []
//         elements.forEach(ele => {
//             arr.push(`(${ele})`)
//             arr.push(`()${ele}`)
//             arr.push(`${ele}()`)
//         })
//         elements = new Set(arr);
//     }
//     let arr = [];
//     elements.forEach(ele => arr.push(ele))
//     return arr;
// };

function generateParenthesis(n, memo = { 1: ["()"] }) {
    if (memo[n]) return memo[n]

    let wrapped = generateParenthesis(n-1, memo);
    memo[n-1] = wrapped;
    let elements = new Set(wrapped.map(ele => `(${ele})`));

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        let lows = generateParenthesis(i, memo);
        memo[i] = lows;
        let highs = generateParenthesis(n - i, memo);
        memo[n - i] = highs;
        combos(lows, highs).forEach(ele => elements.add(ele))
    }
    let arr = [];
    elements.forEach(ele => arr.push(ele))
    return arr;
}

function combos(lows, highs) {
    let results = [];
    for (let low of lows) {
        for (let high of highs) {
            results.push(low + high)
        }
    }
    if (lows.length === highs.length) return results;
    for (let low of lows) {
        for (let high of highs) {
            results.push(high + low)
        }
    }
    return results;
}

console.log(generateParenthesis(1))
console.log(generateParenthesis(3))
console.log(generateParenthesis(4))
