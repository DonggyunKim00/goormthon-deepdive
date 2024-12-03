// 'use client'
import { addTodo } from '@/lib/actions'
import React from 'react'

const Form = () => {
    // server component ===> X 
    // const [title, setTitle] = useState('');
    // const titleRef = useRef()
    // const handleSubmit = () => {
    //     title
    // }

    // server action server component. client component
    // form ===> action
    // button,input ===> formAction 
    return (
        <form
            action={addTodo}
            // onSubmit={handleSubmit} onClick={ }
        >
            <input
                type='text'
                name='title'
                placeholder='새로운 할 일을 생성하세요.'
                autoFocus
                className='flex-grow w-full p-1 text-2xl rounded-lg'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form