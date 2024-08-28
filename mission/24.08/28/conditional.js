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
  if (age >= 20) {
    console.log('술을 마실 수 있는 나이 입니다.');
  } else {
    console.log('미성년자는 술을 마실 수 없습니다.');
  }
  process.exit();
});
