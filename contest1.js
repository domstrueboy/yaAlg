const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

rl.on('line', function(line) {
	const [a, b] = line.split(' ').map(ch => +ch);
    rl.output.write(a + b + '\n');
});