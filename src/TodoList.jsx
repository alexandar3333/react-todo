import Todo from './Todo'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList({todos, setTodos, loading}) {
    const navigate = useNavigate();
    


    return (
        <>
            <button onClick={()=> navigate("/add")}>Add Todo</button>
            <div className='todo-container'>
                {loading && (
                    <p>Loading...</p>
                )}
                {todos.length > 0 && !loading && todos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        </>
    )
}

export default TodoList