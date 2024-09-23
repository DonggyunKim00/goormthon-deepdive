function quickSort(arr) {
  // 배열의 길이가 1 이하이면 이미 정렬된 상태
  if (arr.length <= 1) {
    return arr;
  }

  // 피벗(pivot) 선택: 여기서는 배열의 첫 번째 요소를 선택
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  // 배열의 첫 번째 요소를 피벗으로 선택했으므로 두 번째 요소부터 비교
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // 피벗보다 작은 값은 왼쪽 배열에 추가
    } else {
      right.push(arr[i]); // 피벗보다 큰 값은 오른쪽 배열에 추가
    }
  }

  // 재귀적으로 왼쪽과 오른쪽 배열을 정렬하고, 피벗을 가운데에 위치시킴
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array));
