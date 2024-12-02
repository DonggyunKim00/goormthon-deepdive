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
// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  // pre-render 된 HTML이 만들어짐
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
```

#### `getStaticPaths`

- 데이터에 기반하여 pre-render시 특정한 동적 라우팅 구현(`pages/post/[id].js`)
- 동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 빌드 타임에 렌더됨
- 데이터 fetch 과정(빌드타임에 일어남)
  - 1. 동적 경로의 모든 경로 가져오기
  - 2. getStaticProps의 params로 가져온 경로에 대해서 HTML 생성하기

```javascript
// 경로 가져오기
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts');
  const posts = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://.../posts/${params.id}`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
```

#### `getServerSideProps`

- 요청이 있을때 데이터를 불러옴
- 데이터가 계속 변해야되는 경우 사용
- 개인화된 사용자 데이터나 요청 시에만 알 수 있는 정보에 의존하는 페이지를 렌더링해야 하는 경우 사용
- 요청 시점에 데이터를 가져올 필요가 없거나 데이터와 사전 렌더링된 HTML을 캐시하려는 경우에는 `getStaticProps`를 사용하는 것이 좋습니다

```javascript
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}

```

## File System Route
