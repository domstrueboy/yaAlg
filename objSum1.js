function objSum(object) {
    return Object.entries(object).reduce((acc, [_, value]) => {
        const cur = (typeof value === 'number') ? value : objSum(value);
        return acc + cur;
    }, 0);
}

const o = {
    a: 0,
    b: -1,
    c: {
        ca: 1,
        cb: 100,
        cc: -50,
    },
    d: {
        da: {
            daa: {
                daaa: 150
            }
        }
    }
};

const sum = objSum(o);

console.log(sum);