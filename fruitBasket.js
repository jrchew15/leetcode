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
            // if next fruit is neither of the two we are currently tracking...
            if (prev !== fruits[i]) {
                // check if current window is greater than max
                if (max < i - k) {
                    max = i - k
                }
                // the left side of our window is updated to the most recent switch
                // so that on next iteration, our window will only contain 2 different fruits
                k = j
            }
            // regardless of above, we need to update which fruit was seen most recently
            prev = current;
            current = fruits[i];
            // and we need to update most recent switch pointer
            j = i
        }
    }
    return max > fruits.length - k ? max : fruits.length - k
};
