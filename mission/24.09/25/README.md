## 1️⃣ 복잡한 데이터?

- 자바스크립트에서 복잡한 데이터라 함은 객체 데이터 타입을 말한다고 생각한다.

```abap
📌 객체 타입이란?

- 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조
- 식별자로 참조할 수 있는 메모리 상의 값
- 원시타입과 다르게 변경 가능한 값이다.
```

- 따라서 복잡한 데이터를 잘 다루기 위해선 객체 데이터 타입을 잘 다뤄야한다고 생각할 수 있다.
- 또한 **자바스크립트는 객체 기반 프로그래밍 언어**이며, **JS를 이루고 있는 대부분은 객체**이기 때문에 객체를 잘 다루는 것은 필수적이다.
- 객체의 종류
  - 배열
  - 함수
  - 일반 객체
  - 빌트인 객체

## 2️⃣ 배열

(평소에 많이 사용하지 않았던 배열 메소드를 다뤄보자 👀)

### `Array.prototype.some()`

- 배열 내의 **하나 이상의 요소가 조건을 만족**하는지 여부 확인
- 리턴값은 **boolean**

```jsx
const numbers = [1, 3, 5, 7, 9, 10];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);

console.log(hasEvenNumber); // true
```

### `Array.prototype.every()`

- 배열 내의 **모든 요소가 조건을 만족**하는지 여부 확인
- 리턴값은 **boolean**

```jsx
const numbers = [2, 4, 6, 8, 10];

const allPositive = numbers.every((num) => num > 0);

console.log(allPositive); // true
```

### `Array.prototype.flatMap()`

- 배열을 하나의 평평한 배열로 병합한 후에 각 요소에 대하여 인자로 받은 콜백함수를 매핑함
- 중첩된 배열 구조를 제거할 때 유용하게 쓰임!

```jsx
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const nums = matrix.flatMap((row) => row.map((num) => num * num));

console.log(nums); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## 3️⃣ 객체를 잘 다뤄보자!

3️⃣ **-** 1️⃣ (평소에 많이 사용하지 않았던 객체 메소드를 다뤄보자 👀)

### `Object.entries()`

- 객체의 **키-값 쌍을 배열형태로 바꿈**
- ex) `[key,value]`

```jsx
const user = {
  id: 1,
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
};

const entries = Object.entries(user);
console.log(entries);
// [['id', 1], ['name', 'Alice'], ['age', 25], ['email', 'alice@example.com']]
```

### `Object.assign()`

- 여러 객체를 **하나의 객체로 병합**
- **얕은 복사**를 수행하기때문에 중첩 객체같은 경우는 따로 처리해줘야함
- `Object.assign(target, ...sources)`
  - **`target`**: 속성이 복사될 대상 객체
  - **`sources`**: 복사할 소스 객체, 여러 개를 나열할 수 있음.

```jsx
// 1️⃣ 얕은복사를 이용한 객체의 복사
const original = {
  name: '김동균',
  address: {
    city: '경기도',
  },
};
const copy = Object.assign({}, original);

// 🚨 얕은 복사이므로 depth가 하나 이상 깊은 객체는 원본에 영향이 가게됨!
copy.address.city = '강원도';
console.log(original.address.city); // 강원도

// 2️⃣ 객체의 병합
const user = { id: 1, name: '동균' };
const details = { age: 25, email: '동균@example.com' };
const preferences = { theme: 'dark' };

const merged = Object.assign({}, user, details, preferences);
console.log(merged);
// { id: 1, name: '동균', age: 25, email: '동균@example.com', theme: 'dark' }

// 3️⃣ 여러 객체를 병합하면서 속성 덮어쓰기
const target = { name: '김동균', age: 25 };
const source1 = { age: 30, city: '전라도' };
const source2 = { age: 35, phone: '010-0000-0000' };

const result = Object.assign(target, source1, source2);
console.log(result);
// 출력: { name: '김동균', age: 35, city: '전라도', phone: '010-0000-0000' }
```

3️⃣ - 2️⃣ **옵셔널 체이닝 연산자**

### `?.`

- 객체 속성에 안전하게 접근할 수 있도록 도와주는 자바스크립트 문법
- 접근 시 해당 속성이 존재하지 않는 경우 `undefined`를 반환하고 코드 실행을 중단함
  ⇒ 객체의 속성이 존재하지 않으면 런타임 에러가 발생 할 수 있는데 이것을 막아줌!

```jsx
const user = { profile: { name: 'null' } };

// 기존 방식(에러 발생)
console.log(user.profile.name); // Cannot read property 'name' of null

// 에러 방지를 위한 안전한 접근 방법

// 1️⃣ && 연산자 사용
const name1 = user && user.profile && user.profile.name;
console.log(name); // undefined

// 2️⃣ 옵셔널 체이닝 연산자 사용
const name2 = user?.profile?.name;
console.log(name); // undefined

// 3️⃣ 옵셔널 체이닝과 null 병합 연산자(??)의 조합 예제
// undefined 또는 null일 때만 기본값을 설정하고 싶다면, null 병합 연산자 (??) 사용 가능
// => 0, '', false와 같은 유효한 값을 null이나 undefined와 구분하고 싶을 때 유용
// || 연산자는 falsy한 값(false, 0, '', null, undefined, NaN) 전부 가능
const name = user?.profile?.name ?? '익명';
console.log(name); // 익명
```

### 📚 REFERENCE

- https://f-lab.kr/insight/efficient-javascript-array-object-methods-20240713
- https://pozafly.github.io/javascript/array-is-object/
- https://ko.javascript.info/array
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
