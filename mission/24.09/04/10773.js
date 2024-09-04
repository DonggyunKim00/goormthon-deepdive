// 배열 메서드 reduce를 이용한 누적 합 연산
// forEach 내부에 삼항 연산자를 사용하여 num 값에 따라
// stack에 push, pop을 해주는 로직을 작성 하였다.

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
input.shift();

const solution = (input) => {
  const stack = [];

  input.forEach((num) => (num ? stack.push(num) : stack.pop()));

  return stack;
};

console.log(solution(input).reduce((acc, cur) => acc + cur, 0));
