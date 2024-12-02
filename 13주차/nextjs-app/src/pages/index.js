import { getSortedPostsData } from '../utils/getSortedPostsData';
import Link from 'next/link';

export default function Home({ allPostsData }) {
  console.log(allPostsData);

  return (
    <div>
      <section>
        <p>[Your Self Intoduction]</p>
        <p>(This is a website)</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// build time, server side
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
};
