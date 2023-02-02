// need to check if words is sorted wrt alien lexicon
// iterate and compare to next
// make separate compare function

function isAlienSorted(words, order) {
    const orderDict = { 'undefined': -1 }
    for (let i = 0; i < 26; i++) {
        orderDict[order[i]] = i
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!compare(words[i], words[i + 1])) return false
    }
    return true

    function compare(word1, word2) {
        // returns true if word1 < word2

        let i = 0;
        let n = word1.length <= word2.length ? word1.length : word2.length;

        while (i < n && word1[i] === word2[i]) {
            i++
        }
        if (word1[i] === word2[i]) return word1.length <= word2.length
        return orderDict[word1[i]] <= orderDict[word2[i]]
    }
}

let words1 = ["hello", "leetcode"]
let order1 = "hlabcdefgijkmnopqrstuvwxyz"
let words2 = ["apple", "app"]
let order2 = "worldabcefghijkmnpqstuvxyz"
let words3 = ["word", "world", "row"]

console.log(isAlienSorted(words1, order1))
console.log(isAlienSorted(words2, order1))
console.log(isAlienSorted(words3, order2))
console.log(isAlienSorted(["app", "apple"], order1))
