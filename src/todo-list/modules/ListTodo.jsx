import { useAtom } from 'jotai'
import React from 'react'
import { todoAtom } from '../../jotai/todoAtom'

const ListTodo = () => {
    const [todos, setTodos] = useAtom(todoAtom);
    const handleDelete = (i) => {
        const filteredTodos = todos.todos?.filter((todo, index) => i !== index);
        setTodos({todos:filteredTodos});
    }
    return (
        <div>
            <ol>
                {
                    todos.todos?.map((todo, i) => (
                        <li key={i}>
                            <span>{todo}</span>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default ListTodo
