// 클로저 예제 1
function outer(outerVariable) {
  return function inner(innerVariable) {
    console.log('outer: ' + outerVariable);
    console.log('inner: ' + innerVariable);
  };
}

const newFn = outer('outside');

console.log(newFn);
console.log(newFn());

newFn('inside');

// 클로저 예제 2
let a = 'a';

function functionA() {
  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }

  let b = 'b';
  console.log(a, b);
  functionB();
}

functionA();
