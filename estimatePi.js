function estimatePi(numPoints) {
    // pi is 4 * A_circle / A_square = 4 * pi r^2 / (2r)^2
    // estimate by num points in circle * 4 divided by total points
    let numInside = 0;
    for (let i=1; i <= numPoints; i++) {
        let x = Math.random();
        let y = Math.random();

        if (x*x + y*y < 1) numInside++
    }
    return Math.round(400 * numInside / numPoints)/100
}

console.log(estimatePi(10))
console.log(estimatePi(100))
console.log(estimatePi(1000))
