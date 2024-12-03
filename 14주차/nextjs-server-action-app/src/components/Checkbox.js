'use client'
import { updateTodo } from '@/lib/actions';
import React, { startTransition } from 'react'
import { useOptimistic } from 'react';

// NextJS    
// Page Router 
// App Router 



const Checkbox = ({ todo }) => {
    console.log(todo);

    const [optimisticTodo, addOptimisticTodo] = useOptimistic(todo,
        (state, completed) => ({ ...state, completed })
    );
    // server component 
    // form          => action 
    // input, button => formAction
    // client component
    // startTransition react 18 
    return (
        <input
            type='checkbox'
            checked={optimisticTodo.completed}
            id='completed'
            name='completed'
            className='min-w-[2rem] min-h-[2rem]'
            // onChange={() => startTransition(() => updateTodo(todo))}
            onChange={async () => {
                addOptimisticTodo(!todo.completed);
                await updateTodo(todo);
            }}
        />
    )
}

export default Checkbox