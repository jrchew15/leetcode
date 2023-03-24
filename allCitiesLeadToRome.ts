function minReorder(n: number, connections: number[][]): number {

    let toAdj: {[idx: number]: number[]} = {};
    let fromAdj: {[idx: number]: number[]} = {};

    for (let connection of connections) {
        if (toAdj[connection[0]]) toAdj[connection[0]] = []
        toAdj[connection[0]].push(connection[1])
        if (fromAdj[connection[1]]) fromAdj[connection[1]] = []
        fromAdj[connection[1]].push(connection[0])
    };

    let visited: Set<number> = new Set();
    let stack: number[] = [0];
    let count: number = 0;

    while (stack.length) {
        let curr = stack.pop();
        if (!curr) continue
        visited.add(curr);
        for (let next of toAdj[curr]) {
            if (!visited.has(next)) stack.push(next)
        }
        for (let next of fromAdj[curr]){
            if (!visited.has(next)) {
                stack.push(next);
                count++;
            }
        }
    }
    return count;
};
