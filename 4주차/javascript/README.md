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
