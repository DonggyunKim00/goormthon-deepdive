import Link from 'next/link';
import React from 'react'
import CreatePost from './CreatePost';
// Client Component   page router 
// Server Component   app router 
// page router dynamic routing 
// localhost:3000/posts/5
async function getPosts() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records',
       // { cache: 'no-store' } // 13,14 cathing  // 15 
    );   // getStaticProps  // getServerSideProps 

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data.items;
}

// server component
const PostsPage = async () => {

    const posts = await getPosts();
    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
            <CreatePost />
            {
                posts?.map((post) => {
                    return <PostItem key={post.id} post={post} />
                })
            }
        </div>
    )
}

export default PostsPage

const PostItem = ({ post }) => {
    const { id, title, created } = post;

    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3>
                    {title}
                </h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}

