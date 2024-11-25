## 리액트에서의 데이터 fetching 과정

1. user -> localhost:3000
2. component state 생성
3. retrun UI 렌더링
4. useEffect 실행
5. 비동기 요청 데이터 fetching
6. 데이터 state 보관
7. state 변경 컴포넌트 리렌더링

## Nextjs의 데이터 fetch

#### `getStaticProps`

- 프로젝트를 빌드할 때 데이터를 불러옴
- 데이터 fetch 과정(빌드타임에 일어남)
  - 1. npm run build
  - 2. 비동기 요청 데이터 fetching
  - 3. props 넘김
  - 4. pre-render HTML 생성

```javascript

```

#### `getStaticPaths`

- 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현(`pages/post/[id].js`)
- 동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 빌드 타임에 렌더됨
- 데이터 fetch 과정(빌드타임에 일어남)
  - 1. npm run build
  - 2. 비동기 요청 데이터 fetching
  - 3. props 넘김
  - 4. pre-render HTML 생성

```javascript

```

#### `getServerSideProps`

- 요청이 있을때 데이터를 불러옴
