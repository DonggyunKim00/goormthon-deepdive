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
