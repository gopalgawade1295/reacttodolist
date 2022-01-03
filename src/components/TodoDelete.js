import React from 'react'
import { Button } from '@material-ui/core'

function TodoDelete({ setTodos, todos, todo }) {
    const DeleteTodo = () => {
        setTodos(todos.filter((Todo) => Todo.id !== todo.id))
    }

    const CompletedTodo = () => {
        setTodos(todos.map((ToDo) => {
            if (ToDo.id == todo.id) {
                return {
                    ...ToDo, completed: !ToDo.completed
                }
            }
            return ToDo
        }))
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={CompletedTodo}>Complete</Button>&nbsp;<Button variant="contained" color="secondary" onClick={DeleteTodo}>Delete</Button>
        </div>
    )
}

export default TodoDelete
