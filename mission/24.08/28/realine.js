const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let age = 0;

rl.question('당신의 나이는? ', (line) => {
  age = parseInt(line);
  rl.close();
});

rl.on('close', () => {
  for (let i = 1; i < 11; i++) {
    console.log(`${i}년 후 나이는 ${age + i}살 입니다.`);
  }
  process.exit();
});
