const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('../src/path/to/10mNext.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let result = '';

  for await (const line of rl) {
    const newLine = line.replace(/,/g, ',\n');
    result += newLine + '\n';
  }

  fs.writeFileSync('output.txt', result);
}

processLineByLine();
