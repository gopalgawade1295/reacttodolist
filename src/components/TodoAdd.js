import React, { useState } from 'react'
import TodoList from './TodoList'
import { TextField, Button } from '@material-ui/core'

function TodoAdd() {
    const [inputText, setInputText] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputTime, setInputTime] = useState('')
    const [completed, setCompleted] = useState(false)
    const [todos, setTodos] = useState([])

    const AddTodo = () => {
        setTodos([...todos, { id: Math.random(), text: inputText, date: inputDate, time: inputTime, completed: false }])
        setInputText('')
        setInputDate('')
        setInputTime('')
        setCompleted(false)
    }

    return (
        <div className="App">
            <TextField type="text" placeholder="Type here..." style={{ width: 250 }} value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <br />
            <TextField type="date" style={{ width: 250 }} value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
            <TextField type="time" style={{ width: 250 }} value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={AddTodo}>Add</Button>
            <br />
            <br />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoAdd
