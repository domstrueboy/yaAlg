const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const b = new Array(a.length);
a.forEach((el, i) => {
    b[a.length - i - 1] = el;
});

console.log(b);