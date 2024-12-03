import React from 'react'
import TodoItem from './TodoItem';

async function fetchTodos() {
    try {
        const res = await fetch(
            "http://localhost:3001/todos"
        )

        if (!res.ok) {
            throw new Error("Error!");
        }

        const todos = await res.json();

        return todos;
    } catch (error) {
        if (err) console.log(err.stack);
    }
}

const TodoList = async () => {
    const todos = await fetchTodos();

    let content;
    if (!todos || todos.length === 0) {
        content = <p>Todo 리스트가 없습니다.</p>
    } else {
        const sortedTodos = todos.reverse();

        content = (
            <>
                {
                    sortedTodos.map((todo) => (
                        <TodoItem key={todo.id} {...todo} />
                    ))
                }
            </>
        )
    }

    return content;
}

export default TodoList