/*
start paths queue at 0,0
run a loop incrementing effort
depth first neighbors within effort
if m,n in path, return effort

return effort
*/

function getNeighbors(node, effort, matrix) {
    let neighbors = [];
    let val = matrix[node[0]][node[1]];
    if (node[0] > 0) { carefulPush(node[0] - 1, node[1]) }
    if (node[0] < matrix.length - 1) { carefulPush(node[0] + 1, node[1]) }
    if (node[1] > 0) { carefulPush(node[0], node[1] - 1) }
    if (node[1] < matrix[0].length - 1) { carefulPush(node[0], node[1] + 1) }

    return neighbors;

    function carefulPush(row, col) {
        if (Math.abs(val - matrix[row][col]) <= effort) {
            neighbors.push([row, col])
        }
    }
}

function allDifferences(matrix) {
    let vals = matrix.flat();
    let diffs = new Set();
    for (let i = 0; i < vals.length; i++) {
        for (let j = i + 1; j < vals.length; j++) {
            diffs.add(Math.abs(vals[i] - vals[j]));
        }
    }
    return Array.from(diffs).sort((a, b) => a - b);
}

function minimumEffortPath(heights) {
    if (traverse(heights, 0)) { return 0 }

    let i = 1; let j = Math.max(...heights.flat());
    let mid;
    while (i < j) {
        mid = Math.floor((i + j) / 2);
        if (traverse(heights, mid)) {
            if (!traverse(heights, mid - 1)) { return mid }
            j = mid;
        }
        if (!traverse(heights, mid)) {
            if (traverse(heights, mid + 1)) { return mid + 1 }
            i = mid;
        }
    }
}

function traverse(matrix, effort) {
    let stack = [[0, 0]];
    let visited = new Set(['0,0']);
    const checkNeighbor = (neighbor) => {
        let coordString = neighbor.toString();
        if (!visited.has(coordString)) {
            visited.add(coordString);
            stack.push(neighbor)
        }
    }

    while (stack.length) {
        let current = stack.pop();
        if (current[0] === matrix.length - 1 && current[1] === matrix[0].length - 1) {
            return true;
        }
        getNeighbors(current, effort, matrix).forEach(checkNeighbor)
    }

    return false;
}


let heights1 = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5]
];
let heights2 = [
    [4, 3, 4, 10, 5, 5, 9, 2],
    [10, 8, 2, 10, 9, 7, 5, 6],
    [5, 8, 10, 10, 10, 7, 4, 2],
    [5, 1, 3, 1, 1, 3, 1, 9],
    [6, 4, 10, 6, 10, 9, 4, 6]
];
let heights3 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
let heights4 = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
// console.log(allDifferences(heights1))
console.log(minimumEffortPath(heights1)) // 2
// console.log(allDifferences(heights2))
console.log(minimumEffortPath(heights2))
console.log(minimumEffortPath(heights3))
console.log(minimumEffortPath(heights4))
