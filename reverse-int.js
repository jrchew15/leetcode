var reverse = function (x) {
    let string = x.toString();
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        try {
            sum += (10 ** i) * parseInt(string[i])
        }
        catch { return 0 }
    }
    return sum;
};

let num = 123;

console.log(reverse(num))
