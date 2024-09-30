## 다익스트라 알고리즘

- 그리디 알고리즘(현재의 상황에서 최적을 선택)
- 네비게이션, 네트워크 라우팅에서 사용
- 음의 가중치가 있다면 사용하지 못함!
- 우선순위 큐 사용
  - 최대힙을 사용하여 구현할 수 있음 (하단에 힙 구현 과정이 있음)

## 벨먼포드 알고리즘

- 음의 가중치가 있는 그래프에서 유용하게 사용함

## 트리 구조의 응용

### 이진 탐색 트리

```ABAP
1️⃣ 이진트리
  - 각 부모 노드가 최대 두개의 자식을 가질 수 있는 트리 데이터 구조
  - 구성 요소: 데이터항목, 왼쪽 자식의 주소, 오른쪽 자식의 주소

2️⃣ Full 이진 트리
  - 모든 부모노드/내부노드가 두개의 자식을 갖거나 자식이 없는 특수한 유형의 이진 트리

3️⃣ Complete 이진 트리
  - Full 이진트리와의 차이점
  1. 모든 리프 노드는 왼쪽으로 기울여야 함
  2. 마지막 리프 요소에는 오른쪽 형제 요소가 없을 수 있음

4️⃣ Perfect 이진 트리
  - 모든 내부노드가 정확히 두개의 자식노드를 가지며, 모든 리프노드가 같은 수준에 있는 이진트리

5️⃣ Balanced 이진 트리
  - 각 노드의 왼쪽 서브트리와 오른쪽 서브트리의 높이차이가 0또는 1
```

### 힙

- 힙 속성을 만족하는 **Complete 이진 트리**

  - **최대 힙**: 항상 자식 노드 보다 크고 루트 노드의 키는 다른 모든 노드 중에 가장 큼
    <img width='400' src='https://github.com/user-attachments/assets/75916ecd-022e-4f9e-9448-eca4e36919b6'>

  - **최소 힙**: 항상 자식 노드 보다 작고 루트 노드의 키는 다른 모든 노드 중에 가장 작음
    <img width='400' src='https://github.com/user-attachments/assets/df142276-0f42-43c1-8705-527927c10421'>

- 힙 연산
  - Heapify: 이진 트리에서 힙 데이터 구조를 만드는 프로세스
  - 힙 정렬의 시간 복잡도는 `O(㏒N)`
  - 최대(Max Heap) or 최솟값(Min Heap) 찾기: `O(1)`
  - 삽입,삭제: `O(N㏒N)`

```javascript
// 최소 힙 구현
const arr = [3, 9, 2, 1, 4, 5];

// K 번째 자식 노드는 2K+1, 2K+2

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // 삽입 연산
  // 1. 힙의 마지막 위치에 요소 추가
  // 2. 새로운 요소가 추가된 위치에서 부모노드와 새로 추가된 노드와 비교 반복
  add(value) {
    this.heap.push(value);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let index = this.heap.length - 1; // 새로운 노드가 추가된 위치
    let parentIdx = Math.floor((index - 1) / 2); // 부모 노드의 위치

    while (
      this.heap[parentIdx] && // 부모 노드가 존재하고
      this.heap[index] < this.heap[parentIdx] // 새로운 노드가 부모 노드보다 작은 경우
    ) {
      this.swap(index, parentIdx); // 두 노드의 값을 교체
      // 아래의 로직은 while문을 계속 돌리기 위해서임
      index = parentIdx; // 인덱스를 부모 노드의 인덱스로 변경
      parentIdx = Math.floor((index - 1) / 2); // 새로운 부모 노드의 인덱스 계산
    }
  }

  // 삭제 연산
  // 1. 루트노드 제거
  // 2. 마지막에 있는 노드를 루트노드로 이동
  // 3. 새로운 루트 노드와 자식과의 비교(swap) 반복
  poll() {
    // 힙의 크기가 1인 경우, 힙에서 값을 삭제하고 return
    if (this.heap.length === 1) return this.heap.pop();

    const value = this.heap[0]; // 힙의 최소값(루트 노드의 값)을 저장
    this.heap[0] = this.heap.pop(); // 힙의 끝에 있는 값을 루트 노드로 이동
    this.#bubbleDown(); // 루트 노드에서 bubbleDown을 수행
    return value; // 삭제한 최소값 return
  }

  #bubbleDown() {
    let index = 0; // 루트 노드의 index
    let leftIdx = index * 2 + 1; // 왼쪽 자식 노드의 index
    let rightIdx = index * 2 + 2; // 오른쪽 자식 노드의 index

    while (
      // 왼쪽 자식 노드가 존재 하면서 값이 루트 노드보다 작거나
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      // 오른쪽 자식 노드가 존재 하면서 값이 루트 노드보다 작은 경우
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx; // 왼쪽 자식 노드가 더 작다고 가정
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1] // 오른쪽 자식 노드가 더 작다면
      ) {
        smallerIdx = rightIdx; // 오른쪽 자식 노드의 index로 변경
      }

      this.swap(index, smallerIdx); // 두 노드의 값을 교체
      index = smallerIdx; // index를 더 작은 값의 자식 노드의 index로 변경
      leftIdx = index * 2 + 1; // 왼쪽 자식 노드의 index 계산
      rightIdx = index * 2 + 2; // 오른쪽 자식 노드의 index 계산
    }
  }
}
```

### REFERENCE

- https://chamdom.blog/heap-using-js/
