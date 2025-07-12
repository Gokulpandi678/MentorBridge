import React from 'react'
import InputTodo from './modules/InputTodo'
import ListTodo from './modules/ListTodo'

const Todo = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <InputTodo />
            <ListTodo />
        </div>
    )
}

export default Todo
