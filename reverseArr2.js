const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const b = [];
for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
}

console.log(b);