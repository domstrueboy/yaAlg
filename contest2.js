const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: fs.createWriteStream('./output.txt'),
    terminal: false,
});

rl.on('line', function(line) {
	const [a, b] = line.split(' ').map(ch => +ch);
    rl.output.write(a + b + '');
    rl.output.close();
});