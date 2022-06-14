// check at each index length of palindrome if char is center
// spread out from proposed center

var longestPalindrome = function (s) {
    if (s.length === 0) { return 0 }
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let pal = longestFromCenter(s, i);
        if (longest.length < pal.length) { longest = pal }
    }
    return longest;
};

function longestFromCenter(word, center) {
    let l = center - 1; let r = center + 1;
    while (word[r] === word[center]) { r++ };
    while (word[l] === word[r] && word[l] !== undefined) {
        l--;
        r++;
    }
    return word.slice(l + 1, r);
};

let w1 = 'racecar';
let w2 = 'apple';
let w3 = 'bobcat';
let w4 = 'price';

console.log(longestPalindrome(w1)); // racecar
console.log(longestPalindrome(w2)); // pp
console.log(longestPalindrome(w3)); // bob
console.log(longestPalindrome(w4)); // p
