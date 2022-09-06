function maxSeqLen(arr) {
    return Math.max(...arr
        .join('')
        .split(0)
        .map(str => {
            return str
                .split('')
                .reduce((acc, cur) => +cur + acc, 0);
        }));
}

const max = maxSeqLen([0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]);
console.log(max);