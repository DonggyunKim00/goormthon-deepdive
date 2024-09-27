// 모든 객체는 Object 를 상속받음
// 아래 예제의 프로토타입 체인
// 1. testArray (인스턴스)
// 2. Array.prototype (배열에서 사용할 수 있는 메서드들이 정의됨)
// 3. Object.prototype (모든 객체에서 사용할 수 있는 메서드들이 정의됨)
// 4. null (프로토타입 체인의 끝)

const testArray = [1, 2, 3];
testArray.push(4);

Array.prototype.push = function (x) {
  return console.log(x + 'return!!!');
};

console.log('testArray', testArray);
