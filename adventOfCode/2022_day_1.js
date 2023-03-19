const getData = async (url) => {
    const res = await fetch(url);
    return await res.text();
}

let calBuckets

getData('https://adventofcode.com/2022/day/1/input')
    .then(txt => { calBuckets = txt.split('\n\n').map(elfStr => elfStr.split('\n').map(x => +x)) })

let top3 = [0, 0, 0];

for (let bucket of calBuckets) {
    let total = bucket.reduce((a, b) => a + b, 0);
    if (total > top3[0]) {
        top3[0] = total
        top3.sort((a, b) => a - b)
    }
}
