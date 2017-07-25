const fs = require('fs');

const controller = require('./controller');

const fileLocation = process.argv[2] || 'input.txt';

console.log(`Reading input from ${fileLocation}.`);

const fileContents = fs.readFileSync(fileLocation, 'utf8');

process.stdout.write(`INPUT:\n${fileContents}\n`);

const output = controller.main(fileContents);

fs.writeFileSync('output.txt', output);

process.stdout.write(`OUTPUT:\n${output}`);

process.stdout.write('\nResults can also be seen in output.txt file.\n');
