function maxSeqLen(arr) {
    let max = 0;
    let curMax = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el === 1) {
            curMax++;
            max = Math.max(curMax, max);
            continue;
        }
        curMax = 0;
    }
    return max;
}

const max = maxSeqLen([1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1]);
console.log(max);