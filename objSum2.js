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

function sumObj(object) {
    let sum = 0;

    for (const key in object) {
        if (typeof object[key] === 'number') {
            sum += object[key];
        } else {
            sum += sumObj(object[key]);
        }
    }

    return sum;
}

const sum = sumObj(o);

console.log(sum);