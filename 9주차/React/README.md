## 리액트의 렌더링

- 브라우저의 렌더링 과정
  1. DOM + CSSOM => Render Tree
  2. Layout
  3. Paint
- 이때 2번과 3번의 과정은 무거운 작업임 (인터렉티브한 화면은 해당 과정이 많이 일어나게 됨)
- 리액트의 가상돔(Virtual DOM)
  - 자바스크립트 객체 형태로 메모리안에 저장되어 있음 (실제 DOM과 같은 내용을 담고 있음)
  - 총 2개를 만듬 (렌더링이전의 가상돔, 변경 이후에 보일 가상돔) => (가상돔이 하나 존재하면서 state가 변경될때마다 가상돔이 하나 더 만들어짐)
  - 가상돔 두가지를 비교하는 과정 === DIFFING
  - DIFFING을 거쳐 실제 바뀐 부분을 돔에 반영함 (Batch Update를 통해 한꺼번에 바꿔줌(Layout, Paint 작업이 매번 일어나는 것이 아닌 한번만 일어남)) => Reconciliation

## webpack

- 번들링을 해줌(npm run build)
- 앱이 커지면 파일들을 압축해줘야함, 파일이 많으면 네트워크 비용이 올라감
- 리액트 앱에서 번들링 해주는 부분은 src 임
- webpack dev server

## JSX Key 속성 이해하기

- 가상돔을 비교하는 작업(DIFFING)에서 key prop을 넣어 도와줘야함
- 새로운 값이 들어왔을때 유니크한 값(key)를 넣어주면 판단을 할 수 있음
- 실제로 바뀐부분만 알려주기 위함
- map의 index를 사용하면 안되는 이유?
  - 인덱스는 해당 아이템에 대해서 고정된 값이 아니기 때문에 밀릴 가능성이 있음

```jsx
// key 비교 테스트
<Text />;

const Test = () => {
  const [value, setValue] = useState('');
  const [listArray, setListArray] = useState(['haha', 'hoho']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListArray((prevList) => {
      return [value, ...prevList];
    });
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target)} />
        <button></button>
      </form>

      {/* key 값을 안넣었을때, 이부분을 개발자 도구로 보면 바뀌는 부분 뿐만아니라 다른 요소에도 영향을 미침 */}
      <ul>
        {listArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
```

## 리액트의 생명주기

<img width='700' src='https://github.com/user-attachments/assets/ddc9691c-490d-4409-a5a7-4870aea1e9ff'>

## React.memo() 란?

- React.memo로 둘러 쌓여 있다면 컴포넌트를 렌더링하고 결과를 메모이징 한다.
- 그리고 다음 렌더링이 일어날 때 렌더링 하는 컴포넌트의 props가 같다면 React는 메모이징된 내용을 재사용한다.
- props가 잘 변하지 않는 부분에 메모이제이션을 해주면 성능 개선 효과를 기대할 수 있음
