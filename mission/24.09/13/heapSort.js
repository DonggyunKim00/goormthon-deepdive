// 최대 힙 구성 함수
const heapify = (arr, n, i) => {
  let largest = i; // 루트를 가장 큰 값으로 가정
  let left = 2 * i + 1; // 왼쪽 자식 노드
  let right = 2 * i + 2; // 오른쪽 자식 노드

  // 왼쪽 자식이 루트보다 크면 왼쪽 자식을 가장 큰 값으로 설정
  if (left < n && arr[left] > arr[largest]) largest = left;

  // 오른쪽 자식이 현재 가장 큰 값보다 크면 오른쪽 자식을 가장 큰 값으로 설정
  if (right < n && arr[right] > arr[largest]) largest = right;

  // 가장 큰 값이 루트가 아니면 교환하고, 재귀적으로 힙을 다시 구성
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest); // 재귀적으로 힙 구조를 유지
  }
};

const heapSort = (arr) => {
  let n = arr.length;

  // 배열을 최대 힙으로 구성
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 힙에서 요소를 하나씩 추출하여 정렬
  for (let i = n - 1; i > 0; i--) {
    // 현재 루트(가장 큰 값)를 마지막 요소와 교환
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // 힙의 크기를 줄이고 다시 최대 힙 구성
    heapify(arr, i, 0);
  }

  return arr;
};

const array = [12, 11, 13, 5, 6, 7];
console.log(heapSort(array));
