var myAtoi = function (s) {
    let i = 0;
    while (s[i] === ' ' || s[i] === '+') {
        i++;
    }
    let sign = 1;
    if (s[i] === '-') { sign = -1; i++ }

    let digits = '0123456789';
    let j = i;
    while (digits.includes(s[j])) { j++ }

    return parseInt(s.slice(i, j))
};

console.log(myAtoi('+42'))
console.log(myAtoi('+k'))
console.log(myAtoi('-14k0'))
