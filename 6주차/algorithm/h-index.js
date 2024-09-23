function hIndex(citations) {
  // 오름차순으로 정렬
  citations.sort((a, b) => a - b);

  let left = 0;
  let right = citations.length;
  let n = citations.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // 중간 인덱스에서 h-index 조건 체크
    if (citations[mid] >= n - mid) {
      right = mid; // 조건을 만족하면 왼쪽 구간으로 줄임
    } else {
      left = mid + 1; // 조건을 만족하지 않으면 오른쪽 구간으로 줄임
    }
  }

  // left가 가리키는 위치부터 오른쪽에 있는 논문들이 h-index 조건을 만족
  return n - left;
}
