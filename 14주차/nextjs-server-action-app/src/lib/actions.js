'use server'

import { revalidatePath } from "next/cache";
import sleep from "./sleep";

export async function addTodo(data) {
    const title = data.get('title');

    await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: title,
            completed: false
        })
    })

    revalidatePath('/');

}

export async function deleteTodo(todo) {

    await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id,
        })
    })

    revalidatePath('/');
}


export async function updateTodo(todo) {
    const res = await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ...todo,
            completed: !todo.completed
        })
    })

    await res.json();
    await sleep(2000);
    revalidatePath('/');
}