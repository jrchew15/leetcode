var convert = function (s, numRows) {
    if (numRows === 1) { return s }
    let converted = ''
    for (let i = 0; i < numRows; i++) {
        converted += getRow(s, numRows, i)
    }
    return converted;

    function getRow(s, numRows, k) {
        let row = '';
        if (k === 0 || k === numRows - 1) {
            for (let i = k; i < s.length; i += 2 * numRows - 2) {
                row += s[i];
            }
        } else {
            let i = k;
            let flag = true;
            while (i < s.length) {
                row += s[i]
                if (flag) {
                    i += 2 * numRows - 2 - 2 * k;
                } else {
                    i += 2 * k;
                }
                flag = !flag;
            }
        }
        return row;
    }
};

let string1 = 'PAYPALISHIRING'
console.log(convert(string1, 5));
console.log(convert('A', 1))
