# Javascript

#### map, filter, reduce

- `map()`: 배열 내의 모든 요소를 콜백 함수로 매핑하여 새로운 배열을 반환
- `filter()`: 주어진 조건 함수를 통과하는 요소만 필터링하여 새로운 배열을 반환
- `reduce((누산값, 현재값, 현재값_idx, 원본배열) => {})`: 각 요소에 대해 주어진 리듀서 함수를 실행 => **하나의 결괏값**을 반환!

#### 클로저란?

- 클로저는 주변 상태(어휘적 환경)에 대한 참조와 함께 묶인(포함된) 함수의 조합
- 즉, 내부함수에서 외부 함수의 범위에 대한 접근을 제공
- 클로저는 외부 함수의 데이터를 내부함수와 연관시켜 줌

```javascript
function counter() {
  let count = 0;

  const up = () => {
    count += 1;
  };

  const getCount = () => {
    return count;
  };

  up();
  up();

  return {
    up,
    count, // 클로저로서의 참조를 반환X, count 변수의 값을 반환(값 복사)
    getCount,
  };
}

const count = counter();

console.log(count.count); // 2
console.log(count.getCount()); // 2
count.up();
count.up();
console.log(count.count); // 2
console.log(count.getCount()); // 4

// 위 코드에서 up,getCount 함수는 count 변수를 기억하는 클로저
// count.up(), count.getCount()를 호출할때마다 count 변수에 접근 가능
// count.count는 정적인 값을 반환 => 클로저에 의해 유지되는 count가 아니라 함수를 생성할때의 초기값임
// 내부 함수의 실행 시점에 따라 count 값이 달라진다고 생각하기!
```

#### 구조 분해 할당 (ES6)

- 객체 구조 분해 할당

```javascript
const student = {
  firstName: 'kim',
  lastName: 'donggyun',
};

const { firstName: fName, lastName } = student;

console.log(fName);
console.log(lastName);
```

- 배열 구조 분해 할당

```javascript
const [a,b, ...rest] = [1,2,3,4,5,6];

const week = ['monday','tuesday', 'wednesday',...];
const [day1,day2,day3,day4,day5] = week;
```

#### 전개 연산자(Spread Operator)

- 특정 객체또는 배열의 값을 다른 객체,배열로 복제하거나 옮길 때 사용
- 연산자: `...`
- **기존 배열을 보존해줌**

```javascript
// 배열 조합 방법
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// 1. concat()
arr1.concat(arr2, arr3);

// 2. 전개 연산자
const arrWrap = [...arr1, ...arr2, ...arr3];
```

```javascript
const obj1 = {
  a: 'A',
  b: 'B',
};
const obj2 = {
  c: 'C',
  d: 'D',
};
const objWrap1 = { obj1, obj2 }; // 이렇게하면 객체 자체가 전부 들어가버림
const objWrap2 = { ...obj1, ...obj2 }; // 프로퍼티만 들어감
```

#### 얕은 비교 vs 깊은 비교

- 얕은 비교는 callStack의 값을 기준으로 비교를 하는것
- 원시 타입의 경우는 값 그대로를 비교하지만, 객체의 경우에는 콜스택에 참조 값이 들어가있기 때문에 객체를 따로 생성하면 다를 수 밖에 없음

```javascript
// 얕은 비교 예제
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2);
```

- 깊은 비교는 객체의 경우에도 값으로 비교함
- `JSON.stringify()` 이용하여 객체를 string으로 변경 후 비교
- 만약 객체의 depth가 깊은 경우 lodash isEqual() 이용

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
```

#### 얕은 복사 vs 깊은 복사

- 얕은 복사 방법(depth가 있는 부분들은 복사가되지않음 => 참조값이 그대로 넘어와서 복사본을 변경했을때 원본까지 변경됨)

  - `spread operator`
  - `Object.assign()`
  - `Array.from()`
  - `slice()`
  - `Object.freeze()` => 얕은 동결

  ```javascript
  const aArray = [1, 2, 3];
  const bArray = [...aArray, 4];
  const cArray = Object.assign([], bArray);

  // depth가 1이상 깊어졌을때 얕은 복사를하면 원본을 변경하는 메소드를 사용했을때 원본이 변경됨
  const dArray = [1, 2, 3, [4, 5, 6]];
  const eArray = dArray.slice();
  eArray[3].push(100);

  console.log(dArray); // [1,2,3,[4,5,6,100]]
  console.log(eArray); // [1,2,3,[4,5,6,100]]
  ```

- 깊은 복사 방법

  - `JSON.parse(), JSON.stringify()`
  - spread operator 중첩하여 사용
  - lodash 사용
  - `structuredClone()`: 전역에 있는 메소드이기 때문에 바로 사용 가능!

  ```javascript
  const obj = {
    a:'a',
    b:'b',
    object: {a:1, b:2};
  }

  // depth가 깊어진 부분도 복사본이 변경되었을때 원본이 변경되지 않음!
  const new_obj = JSON.parse(JSON.stringify(obj));
  console.log(obj);
  console.log(new_obj);
  obj.object.a = 1000;
  console.log(obj);
  console.log(new_obj);

  // spread operator로 얕은복사를 depth까지 전부 해주면 됨
  const spreadCopy = {...obj,object:{...obj.object}}
  ```

#### 함수 표현식 vs 함수 선언문

- 함수 선언문: `function fn(){...}`
- 함수 표현식: `const fn = function(){...}`

#### strict mode

- `'use strict'`를 사용하여 엄격하게 문법을 잡아줄 수 있음
- strict mode 를 사용하지 않으면 아래 예제는 에러를 올바르게 내지 않음

```javascript
// 예제1
// 잘못 할당한 식별자를 호출할 수 있음
let greeting = 'hello';

greating = 'hi';
console.log(greeting, window.greating);

// 예제2
// 할당할 수 없는 값에 다른 값을 할당해도 에러가 안남
undefined = 7;
NaN = 10;
'string'.prop = 7;

console.log(undefined);
console.log(NaN);
console.log('string'.prop);

// 예제3
// readonly로 지정한 객체를 재할당해도 에러를 내주지 않음
// 안바뀌긴 함
const obj = {};

Object.defineProperty(obj, 'readOnly', { writable: false, value: 7 });
/*
{ readonly: 7 } 이라는 객체를 생성 => writable:false로 프로퍼티 재할당 불가능
 */

console.log(obj);
obj.readOnly = 10;
console.log(obj);

// 예제4
// 매개변수가 중복된 이름으로 들어갔을때 에러를 내주지 않음
function add(a, a, b) {
  return a + a + b;
}

console.log(add(1, 2, 3));

// 예제5
// strict mode 에서의 함수 안의 this는 undefined 이다!
function sum(a, b) {
  console.log(this);
  return a + b;
}

console.log(this);
sum(1, 2);
// strict mode에서 함수 안의 this를 window객체를 참조 하도록 하는 방법
// sum.bind(this)(1,2);
```

#### 순수 함수(Pure Function)

- Same input => Same output (입력값이 같을때 결괏값이 같다)
- No Side Effects
  - 외부의 상태를 참조 ❌
  - 외부의 상태를 변경 ❌

```javascript
// Same input => Same output
const add = (x, y) => x + y;
console.log(add(11, 22));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName('Donggyun', 'Kim'));

// No Side Effects
// 외부 참조 ❌
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(10, 20));

// 외부 변경 ❌
// 1번
let x = 0;
const numberUp = () => (x += 1); // 비순수 함수
console.log(numberUp());
console.log(x);

const pureNumberUp = (num) => (num += 1); // 순수 함수
console.log(pureNumberUp(x));
console.log(x);

// 2번
const alphabet = ['A', 'B'];

// 비순수 함수
const addItem = (org, item) => {
  org.push(item);
  return org;
};
console.log(addItem(alphabet, 'C'));
console.log(alphabet);

// 순수 함수
const pureAddItem = (org, item) => {
  return [...org, item];
};
console.log(pureAddItem(alphabet, 'C'));
console.log(alphabet);
```

#### 커링(Curry Function)

```javascript
// 예제1
const sum = (x, y) => x + y;
const currySum = (x) => (y) => x + y;

console.log(sum(10, 20));
console.log(currySum(10)(20));

// 예제2
const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

// 예제3
const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

const hamburger1 = makeFood('Bread')('Ham')('Tomato');
const hamburger2 = cleanerMakeFood('Bread')('Ham')('Tomato');
console.log(hamburger1, hamburger2);

// 예제4
// 매개변수를 여러가지 갖는 함수를 커링으로 변환하는 과정!
function log(date, importance, message) {
  alert(`[${date.getHours()}, ${importance}, ${message}]`);
}

const curry = (f) => (a) => (b) => (c) => f(a, b, c);
const curriedLog = curry(log);
curriedLog(new Date())('DEBUG')('some debug');

let logNow = curriedLog(new Date());
logNow('INFO')('messageeeeeee');
```

#### 자바스크립트 엔진

- interpreter: 한줄씩 번역, 분석
- compiler: 한번에 기계어로 변환
- JIT Compiler: interpreter 와 compiler 두가지를 합쳐놓은 것
- 엔진 종류
  - 크롬: V8
  - FireFox: 스파이더몽키
  - 사파리: 자바스크립트 코어
  - 익스프로러: 차크라

#### IIFE(즉시 호출 함수 표현식)

- 정의되자마자 즉시 실행(호출)되는 JS 함수를 말한다.
- 기본적인 형태: `(function(){})()`
- 첫번째 `()`: 전역 선언을 막고, IIFE 내부 안으로 다른 변수의 접근을 막음
- 두번째 `()`: 즉시 호출

```javascript
// 예제1
(function () {
  var aName = 'Barry';
})();
// IIFE 내부에서 정의된 변수 외부 범위 접근 X
console.log(aName); // ReferenceError

// 예제2
var result = (function () {
  var name = 'Barry';
  return name;
})();

console.log(result); // Barry

// 예제3
// 익명 함수의 조건
// 1. 함수를 할당 받을 변수 지정
// 2. 함수 즉시 호출

(function (a, b) {
  return a - b;
})(1, 2); // 즉시 실행 함수 인자 넘기기

// 예제4
// IIFE를 변수에 할당하면 함수 자체가 저장되지 않음
// 함수가 실행된 결과를 저장함
const score = () => {
  let count = 0;
  return {
    current: () => count,
    increment: () => count++,
    reset: () => (count = 0),
  };
};

console.log(score);
/*
  {
    current:f,
    increment:f,
    reset:f
  }
*/
```
