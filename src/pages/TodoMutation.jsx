import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};

const postTodo = async (newTodo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error('Failed to add todo');
  return response.json();
};

const TodoMutation = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const {
    data: todos,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      setMessage('✅ Todo added successfully!');
      queryClient.invalidateQueries(['todos']);
      setTitle('');
    },
    onError: () => {
      setMessage('❌ Failed to add todo.');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    mutation.mutate({
      userId: 1,
      title,
      completed: false
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 className='text-center'>3) Todo List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: '8px', width: '250px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px' }}>
          Add Todo
        </button>
      </form>

      {message && <p>{message}</p>}
      {mutation.isPending && <p>Adding todo...</p>}

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : '🔄 Refresh Todos'}
      </button>

      {isLoading && <p>Loading todos...</p>}
      {isError && <p>Error: {error.message}</p>}

      {!isLoading && !isError && (
        <ul style={{ marginTop: '20px' }}>
          {todos.slice(0, 10).map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span style={{ marginLeft: '8px' }}>{todo.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoMutation;