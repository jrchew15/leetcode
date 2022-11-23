/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits) return [];
    let lib = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    };
    let combos = [''];
    for (let digit of digits) {
        let temp = [];
        for (let str of combos) {
            let chars = lib[digit];
            for (let i = 0; i < chars.length; i++) {
                temp.push(str + chars[i])
            }
            combos = temp;
        }
    }
    return combos
};

console.log(letterCombinations("23"))
console.log(letterCombinations("236"))
console.log(letterCombinations("2"))
console.log(letterCombinations(""))
