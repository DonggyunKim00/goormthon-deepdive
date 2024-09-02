# Javascript

#### console

- console.log
- console.error
- console.warn
- console.table
- console.time, console.timeEnd

#### var, let, const

- var: 중복 선언 O, 재할당 O, 함수 레벨 스코프
- let: 중복 선언 X, 재할당 O, 블록 레벨 스코프
- const: 중복 선언 X, 재할당 X, 블록 레벨 스코프

#### 호이스팅

- 변수 생성 단계
  1. 선언 단계
  - 변수의 선언: 코드가 실행되기 전에 현재 범위 맨 위로 호이스팅,
  - (TDZ 존재)
  - 변수의 초기화: 메모리에 undefined 할당
  2. 할당 단계: 실제 값이 할당

#### 데이터타입

- 원시 타입(Primitive Types)
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Symbol
- 참조 타입(Object Types)

  - Array
  - Object
  - function
  - class

- 원시타입과 참조타입은 메모리 공간에 저장되는 방식이 다름
- 원시타입: Call Stack 메모리 공간 => 실제 데이터가 변수에 할당
- 참조타입: Heap 메모리 공간을 사용하는데 Heap의 유니크한 주소값을 Call Stack에 저장함

#### 타입 변환

- 강제 변환

  - 생성자 사용(`String()`, `Number()`)
  - 메소드 사용(`toString()`,`parseInt()`)

  ```javascript
  let val;
  val = String(111);
  val = String(8+4);
  val = String(false);
  val String(new Date());
  val = String([1,2,3,4]);

  val = (5).toString();
  val = (true).toString();

  val Number('1');
  val Number(true);

  val parseInt('111.40'); // 111
  val parseFloat('111.40'); // 111.4
  ```

- js에 의한 자동 변환
  ```javascript
  const val1 = String(2);
  const val2 = 3;
  const sum = val1 + val2; // '23'
  ```

#### Math

- 연산자 ( `+`, `-`, `*`, `/`,`%` )
- Math 객체
  - Math.min(): 최솟값 리턴
  - Math.max(): 최댓값 리턴
  - Math.random(): 0~1 미만의 난수 리턴
    => `Math.floor(Math.random() * 4 + 1)`: 1~4까지의 랜덤 수
  - Math.floor(): 내림
  - Math.ceil(): 올림
  - Math.round(): 반올림

#### Loop

- for: 코드 블록을 여러 번 반복
- for-in: 객체의 속성을 따라 반복
- for-of
- while: 지정된 조건이 true일때 코드 블록 반복
- do-while: do문은 무조건 첫 한번 실행, 지정된 조건이 true 일때 추가 반복
