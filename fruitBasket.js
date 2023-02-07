var totalFruit = function(fruits) {
    let current;
    let prev;
    let j = 0;
    let k = 0;
    let max = 0;

    // window [k,i]
    // most recent switch at j
    for (let i=0; i < fruits.length; i++) {
        if (fruits[i] !== current) {
            if (prev !== fruits[i]) {
                if (max < i - k) {
                    max = i - k
                }
                k = j
            }
            prev = current;
            current = fruits[i];
            j = i
        }
    }
    return max > fruits.length - k ? max : fruits.length - k
};
