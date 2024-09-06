// map
// 원본배열을 변경하는 것이 아님!
const arr1 = [1, 4, 9, 16];
const map1 = arr1.map((x) => x * 2);
const map2 = arr1.map(
  function (item, idx, arr) {
    console.log(this, item, idx, arr);
  },
  { a: 'a' }
);

// filter
// 주어진 함수 테스트를 통과하는 모든 요소를 새로운 배열을 만들어 반환
const words = ['spray', 'limit', 'elite', 'destruction'];
const result = words.filter((word) => word.length > 6);
console.log(result);

// reduce
