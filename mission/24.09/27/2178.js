const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item, idx) =>
    !idx ? item.split(' ').map(Number) : item.split('').map(Number)
  );

// 상하좌우를 표현하기 위한 배열
// ex) (n,m) 위치에서 dx[idx]와 dy[idx] 를 각각 더해준다면 상하좌우의 좌표가 나옴
const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

const solution = (N, M, graph) => {
  // bfs에서 모든 노드들을 저장할 queue
  const queue = [];

  // 방문 여부를 저장할 배열
  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  // 초기 시작값 설정
  queue.push([0, 0]);
  visited[0][0] = 1;

  let head = 0;
  while (queue.length > head) {
    // js 는 큐 자료구조가 없기때문에 shift() 연산은 O(N) 이 걸리는 작업임
    // 따라서 큐를 따로 구현하지 않았다면 head 값을 두어 while문을 컨트롤 하는것이 시간복잡도 상으로 정확함
    const [prev_x, prev_y] = queue[head++];

    // 인접한 상하좌우 네방향을 순회
    for (let i = 0; i < 4; i++) {
      const nx = prev_x + dx[i];
      const ny = prev_y + dy[i];

      // 범위에 벗어나지 않게 조건문 처리
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      // 이미 방문 했거나, 그래프 상의 좌표가 falsy 값이라면 건너뜀
      if (visited[nx][ny] || !graph[nx][ny]) continue;

      // 위의 조건문을 통과한 [nx,ny] 좌표값을 큐에 넣고, visited에 의도하는 값으로 저장
      queue.push([nx, ny]);
      // 여기서는 이전 값에 +1 을 계속 더해주는 과정 => 움직인 거리를 찾을때 유용
      visited[nx][ny] = visited[prev_x][prev_y] + 1;
    }
  }

  // 모든 bfs 과정이 끝난 후 [N-1,M-1] 좌표에 위치한 값 리턴
  return visited[N - 1][M - 1];
};

const [[N, M], ...graph] = input;
const answer = solution(N, M, graph);
console.log(answer);
