const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

const input = [];

rl.on('line', function(line) {
	input.push(line);

    if (input.length > 1) {
        const [J, S] = input;

        const val = Array.from(S).reduce((acc, cur) => {
            if (J.includes(cur)) {
                return acc + 1;
            }
            return acc;
        }, 0) + '';

        rl.output.write(val);
        exit();
    }
});