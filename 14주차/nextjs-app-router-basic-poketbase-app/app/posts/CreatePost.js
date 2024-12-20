'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreatePost = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(
            `http://127.0.0.1:8090/api/collections/posts/records`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title
                })
            }
        )
        setTitle('');
        router.refresh();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='title...'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button>Create</button>
        </form>
    )
}

export default CreatePost