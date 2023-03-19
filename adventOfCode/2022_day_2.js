const getData = async (url) => {
    const res = await fetch(url);
    return await res.text();
}

let rows;

getData('https://adventofcode.com/2022/day/2/input')
    .then(res => rows = res.split('\n'))

const rowScore = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
}
const rowScore2 = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
}
