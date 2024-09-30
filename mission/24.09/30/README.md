## 1️⃣ 동기 vs 비동기

- **동기 처리**
- 태스크(함수)를 순서대로 하나씩 처리하는 방식
- 실행 순서가 보장 됨
- 앞선 태스크(함수)가 종료할 때 까지 이후 태스크(함수)들이 블로킹 되는 단점이 있음
  ```jsx
  function sleep(func, delay) {
    const delayUntil = Date.now() + delay;

    while (Date.now() < delayUntil);

    // delay 만큼 시간이 지난 이후에 인자로 받은 콜백 함수 func를 호출
    func();
  }

  function foo() {
    console.log('foo');
  }

  function bar() {
    console.log('bar');
  }

  sleep(foo, 3 * 1000); // 3초 이상 걸리는 작업
  bar(); // sleep 함수의 실행이 종료된 이후에 호출(3초 이상 블로킹 됨)

  // 출력
  // (3초 뒤)
  // foo
  // bar
  ```
  ![스크린샷 2024-09-30 오후 1.43.15.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8509b13-708e-46b1-92da-a31667b3b645/df053458-d03b-42cc-8318-2a467ef3ba41/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.43.15.png)
- **비동기 처리**
- 현재 실행 중인 태스크(함수)가 종료되지 않은 상태라 해도 다음 태스크(함수)를 곧바로 실행하는 방식
- 실행 순서가 보장되지 않는 단점이 있음
  ```jsx
  function foo() {
    console.log('foo');
  }

  function bar() {
    console.log('bar');
  }

  // setTimeout은 일정 시간이 경과한 이후 콜백함수를 호출
  // setTimeout은 bar 함수를 블로킹 하지 않는다!
  setTimeout(foo, 3 * 1000);
  bar();

  // 출력
  // bar
  // (3초 뒤)
  // foo
  ```
  ![스크린샷 2024-09-30 오후 1.43.26.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8509b13-708e-46b1-92da-a31667b3b645/90943d22-faeb-4907-ac50-764631ed7d8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.43.26.png)

## 2️⃣ 이벤트 루프, 태스크 큐

```abap
💡 **자바스크립트의 특징** 💡

- **싱글 스레드**로 동작함
	- 함수를 실행할 수 있는 창구가 단 하나
	- 단 하나의 실행 컨텍스트를 스택을 갖음
	- 따라서 실행중인 함수가 종료(pop)되면 다음 실행 컨텍스트가 실행
	- 처리에 시간이 걸리는 태스크를 실행하는 경우 블로킹 현상이 발생
```

![스크린샷 2024-09-30 오후 1.58.07.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8509b13-708e-46b1-92da-a31667b3b645/a0526f5b-7ca3-4ae1-b746-6eab744304a4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.58.07.png)

- 위의 그림을 봤을때 자바스크립트 엔진은 크게 (힙, 콜스택)두가지 영역으로 나뉜다.

```abap
❓ 콜 스택 ❓
	- 소스코드 평가 과정에서 생성된 실행 컨텍스트가 추가되고 제거되는 스택 자료구조인 실행 컨텍스트 스택
	- 함수를 호출하면 함수 실행 컨텍스트가 순차적으로 콜 스택에 push 되어 순차적으로 실행됨
	- 자바스크립트는 단 하나의 콜 스택을 사용(싱글 스레드)
	- 따라서 최상위 실행 컨텍스트(실행 중인 실행 컨텍스트)가 종료되어 콜스택에서 제거되기 전까지 다른
		어떤 태스크도 실행되지 않음

❓ 힙 ❓
	- 객체가 저장되는 메모리 공간
	- 콜 스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조한다
	- 메모리에 값을 저장하려면 저장할 메모리 공간의 크기를 결정해야 하는데, 객체는 원시 값과 다르게 크기가
		정해져 있지 않으므로 할당해야할 메모리 공간의 크기를 런타임에 동적 할당 해야함
	- 따라서 객체가 저장되는 메모리 공간인 힙은 구조화 되어있지 않다는 특징이 있음
```

- 힙과 콜스택으로 구성되어있는 자바스크립트 엔진은 단순히 태스크가 요청되면 콜 스택을 통해 요청된 작업을 순차적으로 실행할 뿐이다.
- 하지만 싱글 스레드에서 비동기가 이루어질 수 있는 이유
  - Node.js 가 호출 스케줄링, 타이머 설정, 콜백 함수의 등록을 담당하고
  - 이를 위해 **브라우저**에서 **태스크 큐**와 **이벤트 루프**를 제공하기 때문이다!
  - **브라우저는 멀티 스레드**로 동작하며, Web API를 제공함

```abap
❓ 태스크 큐(이벤트 큐, 콜백 큐) ❓
	- setTimeout, setInterval과 같은 비동기 함수의 콜백함수 또는 이벤트 핸들러가 일시적으로 보관
		되는 영역

❓ 이벤트 루프 ❓
	- 콜 스택에 현재 실행중인 실행 컨텍스트가 있는지, 태스크 큐에 대기중인 함수가 있는지 반복해서 확인
	- 만약 **콜스택이 비어있고 태스크 큐에 대기중인 함수가 있다면** 이벤트 루프는 **FIFO로 태스크 큐에 대기
		중인 함수를 콜 스택으로 이동**시킴!

❓ Web API ❓
	- ECMAScript 사양에 정의된 함수가 아닌 브라우저에서 제공하는 API
	- DOM API, 타이머 함수, HTTP 요청(Ajax) 와 같은 비동기 처리를 포함
	- setTimeout 에서 **콜백 함수를 태스크큐에 등록하는 처리**는 자바스크립트 엔진이 아닌 **브라우저가 실행**
```

```jsx
function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 0);
bar();

// 동작 방식
// 1. 전역 실행 컨텍스트 생성 => 콜스택 push
// 2. setTimeout 함수 실행 컨텍스트 생성 => 콜스택 push => 현재 실행 중
// 3. 브라우저 수행, 자바스크립트 엔진이 수행 병렬 처리
//   3-1. 브라우저 수행: 타이머가 만료되었을때 콜백함수 foo를 태스크 큐에 push
//   3-2. 자바스크립트 엔진 수행: bar 함수 실행 컨텍스트 생성 => 콜스택 push => 종료 시 콜스택 pop
// 4. 전역 실행 컨텍스트 콜스택 pop => 콜스택이 비어있는 상태가 됨
// 5. 이벤트 루프에 의해 콜스택이 비어있음을 감지하고 태스크 큐에 대기하던 foo 함수를 콜스택에 push
// 6. foo 함수 종료시 foo 함수의 실행 컨텍스트를 콜스택에서 pop
```

## 3️⃣ 비동기 처리 방법

### 📌 1. Callback

- 콜백으로 다른 함수에 매개변수로 함수를 넘겨주어 나중에 호출하는 함수를 말하는데 비동기 처리에 있어서 과거에 자주 사용해오던 방법이다.
- 하지만 콜백 함수는 아래 두가지의 단점을 가지고 있다.

1. **콜백 헬**
   - 콜백 헬은 가독성을 나쁘게하며 실수를 유발하는 원인이 된다.

```jsx
// GET 요청을 통해 서버로 부터 응답을 취득하고 해당 데이터를 이용해 또다시 GET 요청을 하는 예제

get(`${url}`/posts/1`, ({userId}) => {
	console.log(userId); // 1

	// post의 userId를 이용하여 user 정보를 취득
	get(`${url}/users/${userId}`, userInfo => {
		console.log(userInfo);
	})
}

// 콜백 헬
get('/step1', a => {
	get('/step2/${a}', b => {
		get('/step3/${b}', c => {
			get('/step4/${c}', d => {
				console.log(d)
			});
		});
	});
});
```

1. **에러 처리의 한계**
   - 콜백함수 내에서 1초뒤에 에러를 발생시키는 콜백함수를 작성했는데 에러가 잡히지 않는다?
     - `setTimeout` 은 비동기 함수 이기때문에 **내부에서 발생하는 에러는** 호출 시점의 `try…catch` 블록이 아닌 **비동기 작업이 완료된 후 실행되는 이벤트 루프에서 처리된다.**
     - `setTimeout`은 이미 `try…catch` 의 컨텍스트를 벗어나게 된것
     - **에러는 호출자 방향으로 전파된다!!**

```jsx
try {
  setTimeout(() => {
    throw new Error('Error!');
  }, 1000);
} catch (e) {
  // 에러 캐치 ❌
  console.error('캐치한 에러', e);
}
```

### 📌 2. Promise

- ES6 에서 도입된 문법(표준 빌트인 객체)
- **비동기 처리 상태와 처리 결과를 관리하는 객체**
- `Promise` 생성자 함수를 `new` 연산자와 함께 호출하면 프로미스 객체를 생성함

```jsx
const promise = new Promise((resolve, reject) => {
	// Promise 함수의 콜백함수 내부에서 비동기 처리 수행
	if(/* 비동기 처리 성공 */){
		resolve('reulst');
	} else {
		reject('fail');
	}
});
```

```abap
💡 프로미스의 상태 💡

- **pending**: 비동기 처리가 아직 수행되지 않은 상태
	- 상태 변경 조건 => 프로미스가 생성된 직후 기본 상태

- **fulfilled**: 비동기 처리가 수행된 상태(성공)
	- 상태 변경 조건 => resolve 함수 호출

- **rejected**: 비동기 처리가 수행된 상태(실패)
	- 상태 변경 조건 => reject 함수 호출
```

![스크린샷 2024-09-30 오후 3.19.33.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8509b13-708e-46b1-92da-a31667b3b645/1110c8c0-61ca-4c63-a769-24efeff2a774/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-30_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.19.33.png)

- **프로미스의 후속 처리 메서드**
  - `then` : 프로미스를 반환하면 프로미스 그대로, 값을 반환하면 그값을 암묵적으로 resolve 또는 reject 하여 프로미스를 생성하여 반환
  - `catch` : 프로미스가 rejected 상태인 경우만 호출됨, then과 동일하게 동작
  - `finally` : 프로미스의 성공 또는 실패의 여부와 관계없이 무조건 한 번 호출, then, catch와 동일하게 동작

```jsx
// Promise.prototype.then
// 성공
new Promise((resolve) => resolve('fulfilled')).then(
  (v) => console.log(v),
  (e) => console.error(e)
); // fulfilled

// 실패
new Promise((_, resolve) => reject(new Error('fulfilled'))).then(
  (v) => console.log(v),
  (e) => console.error(e)
); // Error: rejected

// Promise.prototype.catch
new Promise((_, reject) => reject(new Error('rejected'))).catch((e) =>
  console.log(e)
); // Error: rejected

// Promise.prototype.finally
new Promise(() => {}).finally(() => console.log('finally')); // finally
```

- **프로미스의 유용한 정적 메서드**
  - `Promise.all`
  ```jsx
  // 모든 비동기 작업이 끝난 후에 한번에 가져옴

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000, 'foo')
  );
  // const promise4 = new Promise.reject('실패');

  Promise.all([promise1, promise2, promise3]).then((value) =>
    console.log(value)
  );
  ```
  - `Promise.race`
  ```jsx
  // 가장 먼저 완료된 비동기 처리만 처리함!

  const pro1 = new Promise((resolve, reject) =>
    setTimeout(resolve, 500, 'one')
  );
  const pro2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, 'two')
  );
  Promise.race([pro1, pro2]).then((value) => console.log(value));
  ```

### 📌 3. async / await

- ES8 에서 도입된 문법
- 프로미스의 후속 메서드 없이 마치 **동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현** 가능
- 프로미스를 기반으로 동작
- **`async` 함수**
  - `await` 키워드는 반드시 `async` 함수 내부에서 사용 해야함!
  ```jsx
  // async 함수는 암묵적으로 반환값을 resolve 하는 프로미스를 반환한다.

  // async 함수 선언문
  async function foo(n) {
    return n;
  }
  foo(1).then((v) => console.log(v)); // 1

  // async 화살표 함수
  const baz = async (n) => n;
  baz(3).then((v) => console.log(v)); // 3
  ```
- **`await` 키워드**
  - 프로미스가 settled 상태(비동기 처리가 수행된 상태)가 될때 까지 대기하다가 **settled 상태가 되면 프로미스가 resolve 한 처리 결과를 반환**
  - `await` 키워드는 **반드시 프로미스 앞에서 사용**해야 한다!
  ```jsx
  async function foo(){
  	const res = await Promise.all([
  		new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  		new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  		new Promise(resolve => setTimeout(() => resolve(3), 1000)),
  	]);

  	console.log(res); // [1,2,3]
  }

  foo(); // 약 3초 소요함

  async function foo(){
  	const res = await Promise.all([
  		const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  		// 두 번째 비동기 처리를 수행하기 위해선 첫 번째 비동기 처리의 결과가 필요함
  		const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  		// 세 번째 비동기 처리를 수행하기 위해선 두 번째 비동기 처리의 결과가 필요함
  		const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000)),
  	]);

  	console.log([a,b,c]); // [1,2,3]
  }

  // await 키워드는 앞선 await 키워드가 붙은 비동기를 처리한 후에 처리가 됨(순서를 보장함)
  foo(); // 약 6초 소요함
  ```
- **에러처리**
  - 콜백 함수를 인수로 전달받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출 할 수 있기 때문에 `try…catch` 문 사용 가능
  ```jsx
  const foo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  foo();
  ```

### 📚 REFERENCE

- 자바스크립트 DEEP DIVE 42장 비동기 프로그래밍
- 자바스크립트 DEEP DIVE 45장 Promise
- 자바스크립트 DEEP DIVE 46장 async/await
- https://hun-dev.tistory.com/29
