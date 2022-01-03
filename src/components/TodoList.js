import React from 'react'
import TodoDelete from './TodoDelete'
import { Typography } from '@material-ui/core'

function TodoList({ todos, setTodos }) {
    return (
        <div>
            {todos.map((todo) => (
                <div>
                    <Typography variant="subtitle1" className={`todo-complete ${todo.completed ? "completed" : ""}`} key={todo.id}>{todo.text} | {todo.date} | {todo.time}</Typography>
                    <TodoDelete setTodos={setTodos} todos={todos} todo={todo} />
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default TodoList
