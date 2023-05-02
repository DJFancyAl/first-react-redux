import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodo } from '../features/todoSlice'

function ToDoList() {
    const todos = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        input && dispatch(addTodo(input))
        setInput('')
    }

    const list = todos.map((item, index) => {
        return <li onClick={() => dispatch(removeTodo(index))} key={index}>{item}</li>
    })


    return (
        <div style={{marginTop: '2rem'}}>
            <h1>Todo List</h1>
            
            <ul>{list}</ul>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Your todo item...' value={input} onChange={(e) => {setInput(e.target.value)}} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    )
}

export default ToDoList