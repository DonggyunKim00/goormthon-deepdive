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

#### Window Object

- Browser 에서의 전역 객체 === Window
- Nodejs 에서의 전역 객체 === Global

- window 객체의 메소드

  - `window.prompt`
  - `window.confirm`
  - `window.outerHeight`
  - `window.outerWidth`
  - `window.innerHeight`
  - `window.innerWidth`
  - `window.scrollY`
  - `window.location`: 현재 URL 에 대한 정보
  - `window.location.reload()`
  - `window.history`: 사용자 방문한 정보

- BOM: Browser Object Model

  - `window.location`
  - `window.navigator`
  - `window.history`
  - `window.screen`

- **DOM => Document Object Model**

  - `window.document`: 브라우저에서 제공해주는 DOM 조작 API 객체
  - 웹 페이지 문서 구조를 트리구조로 표현하여 웹 브라우저가 HTML 페이지를 인식하게함
  - 웹 페이지를 이루는 요소들을 js가 이용할 수 있게끔 트리구조로 만든 객체 모델
  - HTML -> DOM Tree 생성 -> 브라우저 렌더링
  - 메소드 종류
    - `document.baseURI`
    - `document.head`
    - `document.body`
    - `document.doctype`
    - `document.cookie`
  - DOM 특정 요소 작업(돔 조작)

    ```javascript
    const container = document.querySelector('.container');

    // 스타일 작업
    container.style.fontSize = '10px';
    container.style.display = 'none';

    // 컨텐츠 작업
    container.textContent = 'text content';
    container.innerText = 'inner Text';
    container.innerHTML = '<span>hello</span>';
    ```

- var,let,const

  - var: 전역 객체의 프로퍼티가 됨
  - let,const: 전역 객체의 프로퍼티로 사용X => 스코프의 차이 때문

- 웹 페이지 빌드 과정(CRP)

  - HTML -> DOM =>
  - JavaScript + => Render Tree -> Layout -> Paint
  - CSS -> CSSOM =>

  ```ABAP
  ⛈️렌더링 성능에 크리티컬한 영향을 미치는 부분은 Render Tree에서 Layout을 계산하고 Paint를 하는 부분이다!!⛈️
  ❓여기서 Reflow와 Repaint를 컨트롤하는 것이 중요한데 Reflow와 Repaint란 무엇일까?❓

  💡 Reflow: html 요소의 크기나 위치가 변하면 그에 영향을 받는 노드들의 크기와 위치를 다시 계산하게 되는데,
     이렇게 요소의 변화에 따라 Layout 과정을 다시 수행하는 것을 Reflow라고 한다.
  💡 Repaint: Reflow가 발생한 후 새로 계산된 Render Tree를 다시 화면에 그려주는 과정이 필요하다.
     이렇게 Paint 단계를 다시 수행하는 것을 Repaint 라고 한다.
  (+ 무조건 Reflow가 발생해야 Repaint가 발생하는 것은 아니다. background-color, visibility와 같이 레이아웃에 영향을 주지 않는 경우는 Repaint만 발생)

  🔥Reflow 최적화 방법🔥
  1️⃣ 필요없는 요소는 display:none; 을 한다 => Render Tree 에서 아예 삭제되기 때문(Layout 단계 X)
  2️⃣ Reflow 를 일으키는 속성 사용 지양
  3️⃣ 애니메이션 transition을 줄때는 absolute, fixed 사용 지향 => 해당 노드만 Reflow 됨
  4️⃣ 요소의 이동(애니메이션)을 줄이기
  5️⃣ 인라인 스타일 지양 => HTML이 파싱될때 레이아웃에 영향을 주어 추가적인 Reflow 발생
  6️⃣ <table> 지양 => 내부 콘텐츠가 모두 로딩된 후 그려지기 때문, 쓰게된다면 table-layout:fixed 속성 사용 권장
  7️⃣ CSS 하위 선택자 줄이기 => 하위 선택자가 많아지면 CSSOM Tree가 깊어짐 + Render Tree 늦게 만들어짐, Reflow 마다 부모선택자를 매칭하는데 시간이 길어짐

  Reflow를 일으키는 요소 👀
  position width height left top overflow
  right bottom margin padding border
  border-width clear display float font-family
  font-size font-weight line-height min-height
  text-align vertical-align white-space ....

  Repaint를 일으키는 요소 👀
  background background-image background-position
  background-repeat background-size border-radius
  border-style box-shadow color line-style outline
  outline-color outline-style outline-width
  text-decoration visibility ....
  ```

  출처: [js 렌더링 최적화 블로그](https://seokzin.tistory.com/entry/JavaScript-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-Reflow%EC%99%80-Repaint)

#### 유사 배열 객체

- Iterable(반복 가능한) collection
- `Array.from()`: 유사 배열 객체를 배열로 만들어주는 메서드

#### 요소 생성

- createElement

```javascript
const li = document.createElement('li');

// 클래스 이름 생성
li.className = 'list-group-item';

// id 생성
li.id = 'new-item';

// name 생성
li.setAttribute('name', 'New list item');

// text 생성
li.appendChild(document.createTextNode('New List Item'));
```

#### 요소 삭제, 대체

- removeChild: parentNode 에서 해야함!

```javascript
const listParent = document.querySelectorAll('li');
listParent.removeChild(list[0]);
```

- replaceChild: parentNode 에서 해야함!
  `parentNode.replaceChild(newChild, oldChild)`

```javascript
const oldE = document.getElementById();
const newE = document.createElement();
newE.textContent = 'HI';

oldE.parentNode.replaceChild(newE, oldE);
```
