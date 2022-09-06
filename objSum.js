function objSum(object) {
    let sum = 0;
    for (const key in object) {
        if (typeof object[key] === 'number') {
            sum += object[key];
            continue;
        }
        sum += objSum(object[key]);
    }
    return sum;
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