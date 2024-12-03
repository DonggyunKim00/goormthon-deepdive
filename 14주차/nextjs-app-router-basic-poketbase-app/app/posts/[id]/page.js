import React from 'react'

async function getPost(postId) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

const PostDetailPage = async ({ params }) => {

    const post = await getPost(params.id);
    console.log('post', post);

    return (
        <div>
            <h1>posts/{post.id}</h1>
            <div>
                <h3>
                    {post.title}
                </h3>
                <p>{post.created}</p>
            </div>
        </div>
    )
}

export default PostDetailPage