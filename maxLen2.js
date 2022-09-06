function maxSeqLen(arr) {
    let max = 0;
    let curMax = 0;
    for (const el of arr) {
        if (el === 1) {
            curMax++;
            continue;
        }
        if (curMax > max) {
            max = curMax;
        }
        curMax = 0;
    }
    return max;
}

const max = maxSeqLen([0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]);
console.log(max);