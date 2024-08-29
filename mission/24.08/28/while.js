const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

const getNumber = () => {
  rl.question('숫자 입력: ', (line) => {
    const num = parseInt(line);
    arr.push(num);

    if (arr.length === 10) {
      rl.close();
    } else {
      getNumber();
    }
  });
};

rl.on('close', () => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
});

getNumber();
