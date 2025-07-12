import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { todoAtom } from '../../jotai/todoAtom'

const InputTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useAtom(todoAtom);

    const handleAdd = () => {
        const updatedTodos = [...todos.todos, inputValue]
        setTodos({ todos: updatedTodos });
        setInputValue('')
    }

    return (
        <div>
            <input placeholder='Enter todo' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default InputTodo
