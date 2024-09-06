// 동기와 비동기의 개념
console.log('1'); // 동기 (Synchronous)
// 비동기 (Asyncronous)
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3); // 동기 (Synchronous)

// 콜 스택, web API, 콜백 큐, 이벤트루프가 돌아가는 과정을 설명 가능
function B() {
  setTimeout(() => {
    console.log('B-1...');
  }, 0);
}
function A() {
  console.log('A-1...');
  B();
  console.log('A-2...');
}
A();

// 콜스택에 쌓이는걸 보여주는 예제 maximum call stack size
function foo() {
  foo();
}
foo();
