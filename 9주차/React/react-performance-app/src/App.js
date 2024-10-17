import { useEffect, useState } from 'react';
import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  // 생명주기
  // mount => update => unmount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  console.log(posts);
  return (
    <div style={{ padding: '1rem' }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: 'flex' }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
