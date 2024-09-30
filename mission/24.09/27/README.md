## 1️⃣ 그래프란?

- **📌 정의**
  - 여러개의 **노드(Vertex)** 와 이를 연결하는 **간선(Edge)**으로 이루어진 자료구조
- **📌 특징**
  - 무방향성: 그래프의 간선을 통해 양쪽 방향 모두 이동 가능
  - 방향성: 그래프의 간선을 통해 한쪽 방향으로만 이동 가능
  - 가중치: 그래프의 간선에 가중치를 부여할 수 있음(거리, 비용 우선순위 등등)
  - 사이클: 경로를 따라가다 보면 자기 자신으로 돌아오는 경로
  - 차수: 한 노드에 인접한 간선의 수
- **📌 그래프의 종류**
  - 무방향 그래프
  - 간선에 방향이 없는 그래프(양방향)
  - 유용한 알고리즘: DFS, BFS, Union-Find
  - 방향 그래프
  - 간선에 방향이 있는 그래프(일방향)
  - 유용한 알고리즘: DFS, BFS, 위상 정렬
  - 가중치 그래프
  - 간선에 가중치가 있는 그래프
  - 유용한 알고리즘: Dijkstra, Bellman-Ford
  - 이분 그래프
  - 노드를 두 그룹으로 나누었을때 같은 그룹내의 노드는 서로 인접하지 않고 다른 그룹의 노드와만 인접한 그래프
  - 유용한 알고리즘: DFS/BFS 색칠 판별
  - 비순환 그래프
  - 사이클이 없는 그래프
  - 유용한 알고리즘: 위상 정렬, 동적 프로그래밍

![스크린샷 2024-09-30 오전 9.57.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8509b13-708e-46b1-92da-a31667b3b645/173511d1-437f-4d0c-bb82-4370f800de5f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.57.04.png)

## 2️⃣ BFS

- **📌 개념**
  - 다차원 배열에서 각 칸을 방문할 때 너비를 우선으로 방문하는 알고리즘
  - 그래프라는 자료구조에서 모든 노드를 방문하려는 알고리즘
  - **가중치가 없는 그래프의 최단 경로**를 찾는 경우에 유용함
- **📌 BFS가 최단 경로 탐색에 적합한 이유?**
  - 출발점에서 가까운 정점부터 탐색함
  - 먼저 방문한 경로를 큐에 저장하고, 그 경로를 따라가며 재 방문 하지 않기 때문에 각 노드로 도달하는 가장 빠른(짧은) 경로가 자동으로 설정됨
- **📌 알고리즘 로직**
  1. 시작하는 칸을 **큐**에 넣고 방문했다는 표시를 남김
  2. 큐에서 원소를 꺼내서 그 칸에 **상하좌우**로 인접한 칸에 대하여 3번 로직을 진행
  3. 해당 칸을 이전에 방문했다면 건너뛰고, **처음 방문**이라면 **방문표시를 남긴 후**에 해당칸을 **큐에 삽입**
  4. 큐가 빌 때까지 2번 로직 반복
  (모든 칸이 큐에 1번씩 들어가므로 시간복잡도는 칸이 N개일때 `O(N)`)
- **📌 BFS의 정석적인 구현**
  - [백준 2178번 (미로 탐색)](https://www.acmicpc.net/problem/2178)
  ```jsx
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
  ```

## 3️⃣ DFS

- **📌 개념**
  - 다차원 배열에서 각 칸을 방문할 때 깊이를 우선으로 방문하는 알고리즘
  - 백트래킹에 사용하는 대표적인 탐색 알고리즘
  - 경로의 특징을 저장(경로 상의 노드 기억) 하는 경우에 유용하다.
  - 재귀함수 또는 stack으로 구현 가능
- **📌 DFS가 경로의 특징을 저장해둬야 하는 문제(경로 상의 노드를 기억해야하는 문제)에 적합한 이유?**
  - 경로 완전 탐색 ⇒ 한 경로를 끝까지 탐색한 후 다른 경로로 돌아오기 때문에 경로를 완전히 기억하면서 탐색 가능 (중간에 다른 경로로 전환 ❌)
  - 백트래킹과의 조합 ⇒ 한 경로가 조건에 유효하지 않을때 해당 경로를 포기하고 다시 상위노드로 돌아와 다른경로 탐색 가능!
- **📌 알고리즘 로직**
  1. 시작하는 칸을 **스택**에 넣고 방문했다는 표시를 남김
  2. 스택에서 원소를 꺼내서 그 칸과 **상하좌우**로 인접한 칸에 대해 3번 로직을 실행
  3. 이미 방문된 칸이라면 건너뛰고, **첫 방문**이라면 **방문표시를 남긴 후**에 해당칸을 **스택에 삽입**
  4. 스택이 빌 때 까지 2번 로직을 반복
  (모든 칸이 스택에 1번씩 들어가므로 시간복잡도는 칸이 N개일때 `O(N)`)
- **📌 DFS의 정석적인 구현**
  - [백준 15649번 (N과 M)](https://www.acmicpc.net/problem/15649)
  [김동균](https://www.notion.so/7138efaeae2b4fe9921beb5817930ca1?pvs=21) ⇒ 이전에 정리한 BFS, DFS 참고 자료
  ```jsx
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
  ```

### 📚 REFERENCE

- https://velog.io/@kwontae1313/트리와-그래프에-대해-알아보자
- https://www.youtube.com/watch?v=ftOmGdm95XI&list=PLtqbFd2VIQv4O6D6l9HcD732hdrnYb6CY&index=10
- https://www.youtube.com/watch?v=93jy2yUYfVE&list=PLtqbFd2VIQv4O6D6l9HcD732hdrnYb6CY&index=11
- https://velog.io/@kasterra/핵심-자료구조-그래프-최단-경로-탐색
- https://cobi-98.tistory.com/30
