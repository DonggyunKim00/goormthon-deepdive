const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const dfs = (N, M) => {
  const stack = []; // 스택을 이용하여 탐색할 상태 관리
  stack.push([]); // 초기 상태는 빈 배열 (처음에는 아무 숫자도 선택되지 않은 상태)

  while (stack.length > 0) {
    const result = stack.pop(); // 스택에서 하나의 경로를 꺼내서 탐색

    // 현재 선택된 숫자의 길이가 M과 같으면 출력
    if (result.length === M) {
      console.log(result.join(' '));
      continue;
    }

    // 1부터 N까지의 숫자를 역순으로 넣어서 새로운 경로를 만들어 스택에 추가
    for (let i = N; i >= 1; i--) {
      if (!result.includes(i)) {
        stack.push([...result, i]); // 새로운 숫자를 선택한 경로를 스택에 추가
      }
    }
  }
};

const solution = (N, M) => {
  dfs(N, M);
};

const [N, M] = input;
solution(N, M);
