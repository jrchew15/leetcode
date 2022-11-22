function longestCommonPrefix(strs) {
    let x = '';
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str.startsWith(x + strs[0][i]))) {
            x += strs[0][i];
            continue
        }
        break
    }
    return x
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
