const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Solution {
  constructor(N, K) {
    this.head = null;
    this.count = K;
    this.len = N;
    this.#init(N);
  }

  // 1부터 N까지의 연결리스트 구현
  #init(total) {
    for (let i = 1; i <= total; i++) {
      const node = new Node(i);
      if (!this.head) this.head = node;
      else {
        // 리스트의 마지막에 노드 추가
        let currNode = this.head;
        while (currNode.next) {
          currNode = currNode.next;
        }
        currNode.next = node;
        node.prev = currNode;
      }

      // 마지막 노드가 head 노드, head 노드가 마지막 노드를 가리킴
      if (i === total) {
        node.next = this.head;
        this.head.prev = node;
      }
    }
  }

  #delete() {
    if (!this.head) return;

    // count(K) 값에 따른 다음노드 호출
    let cnt = 1;
    while (cnt < this.count) {
      this.head = this.head.next;
      cnt += 1;
    }

    // 사라질 노드 저장
    let store = this.head.value;
    // 현재 헤더 제거
    this.head.prev.next = this.head.next;
    this.head.next.prev = this.head.prev;
    // 헤드를 다음노드로 한칸이동
    this.head = this.head.next;
    // 리스트의 길이 1감소
    this.len -= 1;

    return store;
  }

  result() {
    const answer = [];

    while (this.len > 0) {
      answer.push(this.#delete());
    }

    return answer;
  }
}

const [N, K] = input;
const solution = new Solution(N, K);

console.log(`<${solution.result().join(', ')}>`);

// 해당 문제는 백준 1158번 요세푸스 문제로 다음과 같다.

// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다.이제 순서대로 K번째 사람을 제거한다.
// 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
// 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.원에서 사람들이 제거되는 순서를(N, K) - 요세푸스 순열이라고 한다.
// 예를 들어(7, 3) - 요세푸스 순열은 < 3, 6, 2, 7, 5, 1, 4 > 이다.
// N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

// 예제 입력: 7 3
// 예제 출력: <3, 6, 2, 7, 5, 1, 4>

// 풀이
// 위 문제는 양방향 연결리스트와 원형 연결리스트를 조합하여 풀이하였다.
// Solution 클래스에서 구현된 함수들의 시간복잡도를 계산해본다.

// #init(total)
// 1. total의 값에 의존하는 for문 = O(N)
// 2. else문 내부의 while문 = 최악의경우 O(N), 평균의경우 O(N)에 근사?
// 따라서 #init(total)의 시간복잡도는 최악의경우 O(N^2), 평균의경우 O(N) 이다.
// 다른 풀이를 보고 조금 아쉬움이 남는 부분은 tail 노드를 이용해서 while문을 이용하지않고 마지막 노드를 찾았으면 더 좋았을것 같다.

// #delete()
// 1. count(K)의 값에 의존하는 while문 = O(K)
// 따라서 시간복잡도는 O(K) 이다.

// result():
// 1. len(N)의 값에 의존하는 while문 = O(N)
// 2. #delete()의 시간복잡도 = O(K)
// 따라서 result의 시간복잡도는 O(N * K) 이다.
